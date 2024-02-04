// 设置某元素的text
function setTextContent(selector, text) {
  const ele = document.querySelector(selector);
  ele.textContent = text;
}
// 添加类
function addClass(ele, className) {
  ele.classList.add(className);
}
// 删除类
function removeClass(ele, className) {
  ele.classList.remove(className);
}

export { setTextContent, addClass, removeClass };
