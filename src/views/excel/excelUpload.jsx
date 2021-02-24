import React, { Component } from 'react';
import { Card, Table, Upload, message } from 'antd'
import { tableList } from '@/api/table.js'
import { InboxOutlined } from '@ant-design/icons';
import XLSX from "xlsx";

const { Dragger } = Upload;

const getHeaderRow = (sheet) => {
  const headers = [];
  const range = XLSX.utils.decode_range(sheet["!ref"]);
  let C;
  const R = range.s.r;
  /* start in the first row */
  for (C = range.s.c; C <= range.e.c; ++C) {
    /* walk every column in the range */
    const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })];
    /* find the cell in the first row */
    let hdr = "UNKNOWN " + C; // <-- replace with your desired default
    if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
    headers.push(hdr);
  }
  return headers;
};
const isExcel = (file) => {
  return /\.(xlsx|xls|csv)$/.test(file.name);
};
class index extends Component {
  state = {
    list: null,
    loading: false,
    visible: false,
    header: null,
    initialValues: null
  }
  searchParams = {}
  componentDidMount() {
  }
  onchange = (info) => {
    const { status } = info.file;
    if (status === "done") {
      message.success(`${info.file.name} 文件上传成功`);
    } else if (status === "error") {
      message.error(`${info.file.name} 文件上传失败`);
    }
  }
  customRequest = (e) => {
    this.readerData(e.file).then(() => {
      e.onSuccess();
    });
  }
  readerData = (rawFile) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "array" });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const header = getHeaderRow(worksheet);
        const results = XLSX.utils.sheet_to_json(worksheet);
        this.generateData({ header, results });
        resolve();
      };
      reader.readAsArrayBuffer(rawFile);
    });
  };
  generateData = ({ header, results }) => {
    console.log(header)
    console.log(results)
    this.setState({
      header,
      list: results
    });
    // this.props.uploadSuccess && this.props.uploadSuccess(this.state.excelData);
  };
  render() {
    let columns = []
    if (this.state.header && this.state.header.length > 0) {
      this.state.header.forEach(item => {
        const obj = {
          title: item,
          dataIndex: item,
          key: item
        }
        columns.push(obj)
      })
    }
    console.log(columns)
    return (
      <div>
        <Card title="上传" className="marginBottom">
        <Dragger 
          name="file"
          multiple={true}
          onchange={this.onchange}
          customRequest={this.customRequest}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
          </p>
        </Dragger>,
        </Card>
        <Card>
          <Table 
            dataSource={this.state.list}
            columns={columns}
            rowKey="id"
            loading={this.state.loading}
          ></Table>
        </Card>
      </div>
    );
  }
}

export default index;
