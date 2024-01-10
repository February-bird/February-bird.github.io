// 导入数据
import { stuInfo, score } from "./data.js";

// 初始化数据库
const DB_NAME = "scoreQuery";
const request = indexedDB.open(DB_NAME);
request.onupgradeneeded = event => {
  const db = request.result;
  // 创建学生信息表和成绩表
  createStore(db, "stuInfo", "id", "stuNo", "stuNo", stuInfo);
  createStore(db, "score", "stuNo", "stuNo", "stuNo", score);
};


// 创建store(表)
function createStore(db, storeName, primaryKey, indexName, indexFiled, data) {
  if (!db.objectStoreNames.contains(storeName)) {
    const store = db.createObjectStore(storeName, {
      keyPath: primaryKey,
    });
    // 建立索引
    store.createIndex(indexName, indexFiled, { unique: true });
    // 确保对象及索引创建完成后插入数据
    // 创建多张表,必须使用addEventListener添加事件,否则会覆盖上一个表,只会产生一个表的数据
    store.transaction.addEventListener("complete", event => {
      const s = db.transaction(storeName, "readwrite").objectStore(storeName);
      // 开始插入数据
      data.forEach(value => s.add(value));
    });
  }
}

// 查询信息
function findOneByIndex( scoreName, indexName, indexValue) {
  return request.result
    .transaction(scoreName)
    .objectStore(scoreName)
    .index(indexName)
    .get(indexValue);
}

export { request, findOneByIndex };
