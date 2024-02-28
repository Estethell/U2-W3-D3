fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore!!!");
    }
  })
  .then((bookData) => {
    console.log(bookData);

    const books = [];
    for (let i = 0; i < 4; i++) {
      const randBook = bookData[Math.floor(Math.random() * 50)];
      books.push(randBook);
      console.log(books);
    }

    const cardImages = document.querySelectorAll(".card-image");

    let contatore = 0;
    cardImages.forEach((e) => {
      const img = document.createElement("img");

      img.src = books[contatore].img;
      img.style = "width: 200px; min-height: 300px";
      e.appendChild(img);

      contatore++;
    });

    const cardBody = document.querySelectorAll(".card-body");

    let counter = 0;
    cardBody.forEach((e) => {
      const h3 = document.createElement("h3");
      const p = document.createElement("p");

      h3.innerText = books[counter].title;
      p.innerText = "Prezzo " + books[counter].price;

      e.appendChild(h3);
      e.appendChild(p);

      counter++;
    });
  })

  .catch((error) => console.log(error));

const btn = document.querySelectorAll(".btn");

window.onload = function () {
  btn.forEach((e) => {
    e.addEventListener("click", function () {
      let card = this.closest(".card");
      card.remove();
    });
  });
};
