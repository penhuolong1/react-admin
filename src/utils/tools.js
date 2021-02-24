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

/**
* 获取特定格式时间
* @param {Object} date 时间搓
* @param {String} format 格式
* @return {String} 特定格式的时间
*
* 例如：
* var now = new Date().getTime();
* formatDate(now, 'yyyy-MM-dd H:m:s'); // 2017-01-16 14:32:22
*/
export const formatDate = function(time, formatStr) {
  if (!time) {
    return;
  }
  let date = new Date(time);
  let Y = date.getFullYear();
  let M = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
  let D = date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate();
  let h = date.getHours();
  h = h < 10 ? `0${h}`: h;
  let m = date.getMinutes();
  m = m < 10 ? `0${m}`: m;
  let s = date.getSeconds();
  s = s < 10 ? `0${s}`: s;
  formatStr = formatStr || 'YYYY-MM-DD H:m:s';
  return formatStr.replace(/YYYY|MM|DD|H|m|s/ig, function (matches) {
      return ({
          YYYY: Y,
          MM: M,
          DD: D,
          H: h,
          m: m,
          s: s
      })[matches];
  });
}
