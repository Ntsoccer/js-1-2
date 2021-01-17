let question = prompt("日本の首都は？");
const result = "東京";
while (question !== result && question !== null) {
  alert("不正解です");
  question = prompt("日本の首都は？");
}
if (result === "東京") {
  alert("正解です");
}