export function getCookie(cookieName) {
  let cookieStr = document.cookie;
  // 获取指定的cookie name 位置
  let resultPos = cookieStr.indexOf(cookieName + '=');
  resultPos += (cookieName + '=').length;
  // 提取对应cookie name 的值
  let result = cookieStr.substring(resultPos);
  
  return result;
};
