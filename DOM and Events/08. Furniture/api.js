import fetch from "node-fetch";

var myHeaders = new Headers();
myHeaders.append(
  "User-Agent",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.0"
);
myHeaders.append("Accept", "application/json, text/plain, */*");
myHeaders.append("Accept-Language", "en-US,en;q=0.5");
myHeaders.append("Accept-Encoding", "gzip, deflate, br");
myHeaders.append("Referer", "https://skinport.com/market");
myHeaders.append("DNT", "1");
myHeaders.append("Connection", "keep-alive");
myHeaders.append(
  "Cookie",
  "i18n=en; scid=eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiQTE5MktXIn0.MsqAVdMI1Irr8So0HUAxD-AG53IT7W0CZI1TKUiLWXPFooe8iIxEBw.DSI_IiV3iwNXZgXD0mmlsw.PrrhhBwSJv4cE79mjMj1671dXk8rYuCZldd_v2IhjWhEWyNiSwbqyOCg5OQKKRZpvW63zexAsJk0eVRj4mHYRiREg1xGFAo2LDQfT6W6yo_UgpPHD2NCN4Tx3TDoj-RHEfRGby8YF1pO26I548V0k_KGTwDWRWjR8lA7xN5z5v5M82K2R7kQfg6DqraoYPBQssgSBUphXl5H-Y-bPFxhfYTWvwhja2ghSRC8xB-9JbTl4D6BrtA9yVneOGRCDhDBk8bIGS3dPt4VKSSe03UnwlAdDQXfciK1njunXu2MX2CxvJEYFmSYUMDUH3MXNl9HMqgiTZzVNsssBkKfEQV61_hif0tva0eTpb6wjMsB_oViIUqgU8lhiN4iieNmfNAV9QfbLealc_MekTO3HzTUxwHggipXKM6yWcxQ5wibfHrj3w2VjMIKq1XW5OKiRKzFupmTWxykNWNMA8Lj2arvqcBFLqiM83hgM7gmr88zLiCUsCLsvK0tgpX8k6ZyQ7DndFzNR7TnZCKZhK16sPzUSkh9rqiMSM7dzJIkn9RgtUZHR4KpDduaUjcaA_2YOD7d6l2X6I5RiPsuy1kUAc4OIVM-m2ksk5yZir7JRbnI9UzWajE-Avmq7XW5GDO0yyLf.FjBJuYDr06vrt_ygviLOtg; _ga_JQVJ6LN9T1=GS1.2.1689964303.32.1.1689964746.60.0.0; _ga=GA1.2.1319651322.1686120714; connect.sid=s^%^3A3gNF1qbcdaKWqGyrv3zB4xLTzGX36y29.pjDvaPkzlxC92jLB^%^2F^%^2BumlSnKv6EccvoLB8NkWYc1PsA; __cf_bm=hyWqzrOGMRzA6mADeMmIBKYrUICbpbe0Owz3koIfPP4-1689964573-0-AdjBkUwgmLDy7JE5ngwbiVtR7QEVAvt0RAF5emw7LVV+kwBjYHntMSmucpu4bWoY63pOiNBxh5dJBwUh4E4Pqww=; _csrf=mBLcrxGp48ayG70upCMHAP5h; cf_clearance=cFadkssF2.9k0CLeT1xe792P3xT4F19HJ62I5DxRTjk-1689964574-0-0.2.1689964574; _uetsid=d737d8d027f411eebb2a5d740b811d5a; _uetvid=108caff0de2b11ed82e71bd50e44c4cf; __cf_bm=2XfAnxO_96QCcCsAm_BVds9krLimcY2AJlFnE99bBNc-1689966293-0-ATrDNJjy1zUca4xyt2vZSJs9GKvrY4BY6t2jJcNEQLzoBee7exAh8QiYMxYxYDt6uQG7JSqtPkJ4ynrV3069xU8="
);
myHeaders.append("Sec-Fetch-Dest", "empty");
myHeaders.append("Sec-Fetch-Mode", "cors");
myHeaders.append("Sec-Fetch-Site", "same-origin");
myHeaders.append("TE", "trailers");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch("https://skinport.com/api/browse/730", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
