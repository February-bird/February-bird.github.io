import { findOneByIndex } from "./db/db.js";

const btn = document.querySelector(".btn");
const inputUser = document.querySelector(".input-user");
const inputPwd = document.querySelector(".input-pwd");
const inputs = document.querySelectorAll(".input-ele");

inputs.forEach(ele => {
  ele.addEventListener("input", (e) => {
    if (inputUser.value != "" && inputPwd.value != "") {
      btn.disabled = false
      btn.style.backgroundColor = "#7540bf"
    } else {
      btn.disabled = true
      btn.style.backgroundColor = "#e0cffc"
    }

    // 去除边框红线提示
    if (inputUser.value == "" || inputPwd.value == "") {
      e.target.classList.remove("border-tips")
      const ele = document.querySelector(".tips")
      ele.classList.remove("show")
    }

  })
})



btn.addEventListener("click", e => {
  // 阻止默认行为
  e.preventDefault();
  const form = document.querySelector("form");
  const data = new FormData(form);
  const userName = data.get("username");
  const pwd = data.get("password").trim().toUpperCase();

  // 查询数据库是否有对应的信息,验证密码
  const request = findOneByIndex("stuInfo", "stuNo", userName);
  request.onsuccess = event => {
    const res = event.target.result;
    if (res == undefined || pwd != res.password) {
      const ele = document.querySelector(".tips")
      ele.classList.add("show")

      // 添加红线提示
      inputs.forEach(ele => {
        ele.classList.add("border-tips")
      })
      return;
    }
    // 账号密码正确,跳转到成绩展示页面
    location.href = `./score.html?id=${userName}&&name=${res.name}`;
  };
});
