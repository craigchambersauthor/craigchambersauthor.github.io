var converter = new showdown.Converter();

var card = document.querySelector(".card");

document.addEventListener("DOMContentLoaded", renderContent);

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
        card.innerHTML += converter.makeHtml(data);
      });
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });

  document.querySelector("#home").children[0].classList.remove("test");
  document.querySelector("#about").children[0].classList.add("test");
  document.querySelector("#library").children[0].classList.remove("test");
}
