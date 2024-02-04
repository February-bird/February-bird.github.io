// 分数详情页
import { getSearchParams } from "./tools/url.js";
import { getOneScoreByid } from "./db/db.js";
import { addClass, removeClass, setTextContent } from "./tools/dom.js";

// 获取query
const id = getSearchParams(location.href, "id");
const stuName = getSearchParams(location.href, "name");
// 获取数据
const { subjects, overallRank } = await getOneScoreByid(id);
// 设置学号,姓名,排名
const doc = document;
setTextContent(".stu-id", id);
setTextContent(".stu-name", stuName);
setTextContent(".overall-rank", overallRank);

// 获取模板,遍历科目,动态生成数据
const template = doc.querySelector("#template").content;
const tds = template.querySelectorAll("td");
const fragment = new DocumentFragment();
let noPassCount = 0;
subjects?.forEach(({ course, score, singleRank, comment }) => {
  initValue(tds[0], course);
  initValue(tds[1], score, "SCORE");
  initValue(tds[2], singleRank);
  initValue(tds[3], comment, "COMMENT");
  const clone = doc.importNode(template, true);
  fragment.append(clone);
  score < 60 && noPassCount++;
});

// 根据不同分数和排名显示不同的图案
const passImg = doc.querySelector(".pass-img");
if (noPassCount) {
  passImg.src = "img/nopass.svg";
} else if (!noPassCount) {
  passImg.src = "img/pass.svg";
} else if (overallRank < 11) {
  passImg.src = "img/good.svg";
}

const table = doc.querySelector("table");
table.tBodies[0].append(fragment);
// 取消加载动画
const loading = doc.querySelector(".loading");
addClass(loading, "hide");
addClass(table, "show");

function initValue(td, text, tag = "") {
  td.textContent = text;
  if ((tag == "SCORE" && text < 60) || (tag == "COMMENT" && text)) {
    addClass(td, "not-pass");
    return;
  }
  removeClass(td, "not-pass");
}
