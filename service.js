function Get(Url) {
  var Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET", Url, false);
  Httpreq.send();
  return Httpreq.responseText;
}
const json_obj = JSON.parse(Get("https://dry-cliffs-94979.herokuapp.com/"));
console.log("this is the author name: " + json_obj[0].name);