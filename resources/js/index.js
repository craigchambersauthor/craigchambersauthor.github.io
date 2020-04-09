var converter = new showdown.Converter();
var main = document.querySelector(".main");

window.addEventListener("load", function () {
  getJson();
});

function getJson() {
  fetch("resources/json/news.json")
    .then(function (response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        console.log(data);
        data.forEach((element) => {
          // build card

          //      <div class="card">
          //          <img
          //              class="image" src='../resources/images/craigchambers.jpg'>
          //          </img>
          //          <h1 class="cardTitle">Lorem ipsum dolor sit.</h1>
          //          <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eum, eos veniam consequatur perspiciatis quisquam illum dolore numquam ex voluptas.</p>
          //          <button id="signUpButton" class="signUpButton" onclick="signUp()">
          //              Sign up
          //          </button>
          //      </div>

          var card = document.createElement("div");
          card.classList.add("card");

          var image = document.createElement("div");
          image.classList.add("image");
          image.style.backgroundImage = "url(" + element.image + ")";
          card.appendChild(image);

          var textBox = document.createElement("div");
          textBox.classList.add("textBox");
          card.appendChild(textBox);

          var title = document.createElement("h1");
          title.classList.add("cardTitle");
          title.innerText = element.title;
          textBox.appendChild(title);

          var description = document.createElement("p");
          description.classList.add("description");
          description.innerHTML = element.description;
          textBox.appendChild(description);

          var button = document.createElement("button");
          button.classList.add("signUpButton");
          button.id = "signUpButton";
          button.addEventListener("click", function () {
            console.log("button clicked");
          });
          button.innerText = element.callToAction;
          textBox.appendChild(button);

          main.appendChild(card);
        });
      });
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}

// var html = converter.makeHtml(text);
