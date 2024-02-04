import { findOneByIndex } from "./db/db.js";
import { addClass, removeClass } from "./tools/dom.js";

const doc = document;
const inputs = doc.querySelectorAll(".input-ele");
const btn = doc.querySelector(".btn");
isActiveBtn();
inputs.forEach(ele => {
  ele.addEventListener("input", e => {
    // 去除边框红线提示
    if (isActiveBtn()) {
      const ele = doc.querySelector(".tips");
      removeClass(ele, "show");
      removeClass(inputs[0], "border-tips");
      removeClass(inputs[1], "border-tips");
    }
  });
});

btn.addEventListener("click", e => {
  // 阻止默认行为
  e.preventDefault();
  const data = new FormData(doc.forms[0]);
  const userName = data.get("username");
  const pwd = data.get("password").trim().toUpperCase();

  // 查询数据库是否有对应的信息,验证密码
  const request = findOneByIndex("stuInfo", "stuNo", userName);
  request.onsuccess = event => {
    const res = event.target.result;
    // 如果账号密码正确,跳转到成绩展示页面
    if (res?.stuNo == userName && res.password == pwd) {
      location.href = `./score.html?id=${userName}&&name=${res.name}`;
      return;
    }
    // 账号或密码错误添加红线提示
    const ele = doc.querySelector(".tips");
    addClass(ele, "show");
    inputs.forEach(ele => addClass(ele, "border-tips"));
  };
});

function isActiveBtn() {
  if (inputs[0].value && inputs[1].value) {
    btn.disabled = false;
    addClass(btn, "enabled");
    return true;
  }

  btn.disabled = true;
  removeClass(btn, "enabled");
}
