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

/**
 * 防抖
 * @param {*} func 
 * @param {*} wait 
 * @param {*} immediate 
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result;

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp;

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function (...args) {
    context = this;
    timestamp = +new Date();
    const callNow = immediate && !timeout;
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }
    return result;
  };
}


/**
 * 判断是否为undefined
 */
export function isUnderfined(val) {
  return typeof(val) == 'undefined'
}

/**
 * 判断是否为Null
 */
export function isNull(val) {
  return !val && typeof(val)!="undefined" && val!=0
}
