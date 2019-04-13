//XMLHttpRequest GET

// CREATE NEW OBJECT
const xhr = new XMLHttpRequest();
const url = "https://api-to-call.com/endpoint";

// HANDLE RESPONSE
xhr.responseType= 'json';
xhr.onreadystatechange = () => {
if (xhr.readyState === XMLHttpRequest.DONE) {
      return xhr.response;
}
}
xhr.open('GET', url);
xhr.send();