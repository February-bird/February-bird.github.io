import { findOneByIndex } from "./db/db.js";

const doc = document;
const inputs = doc.querySelectorAll(".input-ele");
const btn = doc.querySelector(".btn");
isActiveBtn();
inputs.forEach(ele => {
  ele.addEventListener("input", e => {
    const active = isActiveBtn();
    // 去除边框红线提示
    if (active) {
      const ele = doc.querySelector(".tips");
      ele.classList.remove("show");
      inputs[0].classList.remove("border-tips");
      inputs[1].classList.remove("border-tips");
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
    ele.classList.add("show");
    inputs.forEach(ele => ele.classList.add("border-tips"));
  };
});

function isActiveBtn() {
  if (inputs[0].value && inputs[1].value) {
    btn.disabled = false;
    btn.style.backgroundColor = "#7540bf";
    return true;
  }

  btn.disabled = true;
  btn.style.backgroundColor = "#e0cffc";
  return false;
}
