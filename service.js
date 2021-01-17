Cards();

function Get(Url) {
  var Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET", Url, false);
  Httpreq.send();
  return Httpreq.responseText;
}

function getContainer() {
  return document.getElementById("cards");
}

function Cards() {
  const container = getContainer();
  // const json_obj = JSON.parse(Get("https://dry-cliffs-94979.herokuapp.com/"), (key, value) => {

  // });
  const json_obj = JSON.parse(Get("https://dry-cliffs-94979.herokuapp.com/"));
  for (let i in json_obj) {

    container.innerHTML +=
      '<div class="col-md-4">'
      + ' <div class="card" style="width: 18rem;"> '
      + '<img src="' + json_obj[i].photo + '" class="card-img-top" alt="..."> '
      + ' <div class="card-body"> '
      + ' <h5 class="card-title" >' + json_obj[i].property_type + '</h5> '
      + ' <p class="card-text">R$ ' + json_obj[i].price + ' </p> '
      + ' <a href="#" class="btn btn-primary">Conhecer</a> '
      + ' </div> '
      + ' </div> '
      + '</div> '
  }

}