function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://www.coinexchange.io/api/v1/getmarkets");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
    alert(response);
}