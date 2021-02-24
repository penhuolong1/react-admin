import userAgent from "user-agent";
// User-Agent是Http协议中的一部分，属于头域的组成部分，User Agent也简称UA。用较为普通的一点来说，是一种向访问网站提供你所使用的浏览器类型、操作系统及版本、CPU 类型、浏览器渲染引擎、浏览器语言、浏览器插件等信息的标识。UA字符串在每次浏览器 HTTP 请求时发送到服务器！
import store from "@/store";
import { addBug } from "@/store/actions/monitor.js"

function getExtraData() {
  return {
    title: document.title,
    url: window.location.href,
    timestamp: Date.now(),
    userAgent: userAgent.parse(navigator.userAgent).name,
  };
}
//gif图片做上传 图片速度 快没有跨域 问题，
class SendTracker {
  // send(data = {}) {
  //   let extraData = getExtraData();
  //   let logInfo = { ...extraData, ...data };

  //   // 图片打点
  //   const img = new window.Image();
  //   img.src = `${feeTarget}?d=${encodeURIComponent(JSON.stringify(logInfo))}`;
  // }
  send(data = {}) {
    let extraData = getExtraData();
    let logInfo = { ...extraData, ...data };
    console.log('错误信息')
    console.log(logInfo)
    store.dispatch(addBug(logInfo));
  }
}

export default new SendTracker();
