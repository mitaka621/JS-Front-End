function returnArr(json) {
  let skinportObj = json;
  let fullPrice = 0;
  skinportObj.items.sort((a, b) => b.salePrice - a.salePrice);
  console.log(JSON.stringify(skinportObj.items[0].link));
  const link = `https://skinport.com/item/${skinportObj.items[0].url}/${skinportObj.items[0].saleId}`;
  console.log(link);
}

const dataJson = require("./response2.json");

returnArr(dataJson);
