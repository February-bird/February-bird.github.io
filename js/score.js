// 分数详情页
import { request, findOneByIndex } from "./db/db.js";


// 获取query
const id = getSearchParams(location.href, "id");
const stuName = getSearchParams(location.href, "name");

// 设置学号和姓名
const doc = document;
const idStu = doc.querySelector(".stu-id");
idStu.textContent = `学号: ${id}`;
const nameStu = doc.querySelector(".stu-name");
nameStu.textContent = `姓名: ${stuName}`;

// 获取数据
const { subjects, overallRank } = await getOneScoreByid(id);
const rank = doc.querySelector(".overall-rank");
rank.textContent = overallRank;

// 获取模板
const templateContent = doc.querySelector("#row-element").content;
const fragment = doc.createDocumentFragment();
// 将数据设置到表格中
let noPassNumber = 0;
if (overallRank) {
  subjects.forEach(value => {
    const { course, score, singleRank, comment } = value;
    initValue(".course", course);
    initValue(".score", score);
    initValue(".single-rank", singleRank);
    initValue(".comment", comment);
    const clone = doc.importNode(templateContent, true);
    fragment.append(clone);
    score < 60 && noPassNumber++;
  });
  // // 根据不同分数和排名显示不同的图案
  const passImg = doc.querySelector(".pass-img");
  if (noPassNumber) {
    passImg.src = "img/nopass.svg";
  } else if (overallRank < 11) {
    passImg.src = "img/good.svg";
  }
}

const tbody = doc.querySelector("tbody");
tbody.append(fragment);

// 取消加载动画
const loading = document.querySelector(".loading")
const table = document.querySelector("table")
loading.classList.add("hide")
table.classList.add("show")

function initValue(
  selector,
  text,
  template = templateContent
) {
  const td = template.querySelector(selector);
  td.textContent = text;
  if ((selector == ".score" && text < 60) || text == "缺考" || text == "补考") {
    td.classList.add("not-pass");
  }
  else {
    td.classList.remove("not-pass");
  }
}

function getSearchParams(url, key) {
  return new URL(url).searchParams.get(key);
}

async function getOneScoreByid(id) {
  try {
    return new Promise(resolve => {
      request.onsuccess = () => {
        const req = findOneByIndex("score", "stuNo", id);
        req.onsuccess = e => resolve(e.target.result);
      };
    });
  } catch (error) {
    console.log(error);
  }
}
