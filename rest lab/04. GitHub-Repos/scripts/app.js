function loadRepos() {
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "__cf_bm=6jBVWEJ177EoQmSj4jNnHEwRivshOee.T.M766wN7og-1690039508-0-AfK1YEIZGNMUkxt8mp2RiIcXQoINSh8ZOiJ/nwDQ2lStCv34G0HOkPu3ucfQLaXleNt8UpJueTFj+a/s8RJ3YM0=; _csrf=7yqyHqASTL4cAWdGaEZV01e-");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://api.skinport.com/v1/items?app_id=730&tradable=0", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
