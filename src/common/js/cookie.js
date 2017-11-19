export function getCookie(cookieName) {
  // 1. 获取cookie 字符串
  let cookieStr = document.cookie;
  // 2. 获取对应的cookie 名字加上 '=' 的起始位置
  let startPos = cookieStr.indexOf(cookieName) + (cookieName + '=').length;
  // 3.获取结束位置
  let endPos = cookieStr.indexOf(';', startPos);
  // 4.获取最后结果并返回
  let result = cookieStr.substring(startPos, endPos);
  return result;
};
