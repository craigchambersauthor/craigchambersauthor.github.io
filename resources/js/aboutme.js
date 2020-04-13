var converter = new showdown.Converter();

var card = document.querySelector(".card");

document.addEventListener("DOMContentLoaded", renderContent);

// text      = '# hello, markdown!',
// html      = converter.makeHtml(text);

function renderContent() {
  fetch("../resources/md/aboutme.md")
    .then(function (response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.text().then(function (data) {
        console.log(data);
      });
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}
