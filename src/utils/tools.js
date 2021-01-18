/**
 * 遍历jsonTree获取指定字段获取整级数组
 * @param {*} pathname 
 * @param {*} jsonTree 
 * @param {*} path
 * return array 
 */
export const getTreeItemByLabel = (pathname, jsonTree, path) =>{
  if(path === undefined) {
    path = [];
  }
  for(var i = 0; i < jsonTree.length; i++) {
    var tmpPath = path.concat();
    tmpPath.push(jsonTree[i]);
    if(pathname === jsonTree[i].path) {
        return tmpPath;
    }
    if(jsonTree[i].children) {
      var findResult = getTreeItemByLabel(pathname, jsonTree[i].children, tmpPath);
      if(findResult) {
        return findResult;
      }
    }
  }
}

/**
 * 遍历jsonTree获取指定字段获取单个对象
 * @param {*} pathname 
 * @param {*} jsonTree 
 * @param {*} path 
 * return object
 */
export function findPathByLabelToObj(pathname, jsonTree, path){
  if(path === undefined) {
      path = {};
    }
    for(var i = 0; i < jsonTree.length; i++) {
        var tmpPath = path;
        if(pathname === jsonTree[i].path) {
          tmpPath=jsonTree[i];
          return tmpPath;
        }
        if(jsonTree[i].children) {
          var findResult = findPathByLabelToObj(pathname, jsonTree[i].children,  tmpPath);
          if(findResult) {
            return findResult;
          }
        }
    }
}