const modalData = [
  {
    title: "Elafonissi, Greece",
    image: ["Elafonissi01", "Elafonissi02", "Elafonissi03"],
    text: "Located on the southwest coast of Crete, this remote beach is best known for its pink sand. However, temper your expectations as the amount of pink on display varies with conditions and the season. Regardless, the crystal clear waters make this a popular summer vacation spot, attracting sunbathers and water sport enthusiasts alike. Also, hike up to the neighboring cedar tree reserves for a change of scenery. Visit in the morning to beat traffic and secure a chair and umbrella before the crowds arrive. Or come in the evening for a stunning sunset when most people have left.",
  },
  {
    title: "Hanalei Bay, Hawaii",
    image: ["Hanalei01", "Hanalei02", "Hanalei03"],
    text: "This crescent-shaped bay in Kauai is the largest bay on the north shore, with stunning views and gorgeous beaches. Start at Black Pot Beach and head towards Hanalei Pier—an unmistakable landmark jetty made famous by the classic film, South Pacific—before walking towards Hanalei Pavilion Beach Park. Find a good spot along the bay to set down your towels—you can have a picnic, kayak, sunbathe, and even snorkel if the waters are calm (the waves can be rough during winter). Stay until sunset for exceptionally amazing views of Mount Makana in the distance.",
  },
  {
    title: "Copacabana beach",
    image: ["copacabana01", "copacabana02", "copacabana03"],
    text: "Copacabana, the very name itself provokes images of beauty, sand and ocean. The magnificent jungle-clad mountains rise from the ocean and seem to blend into the beautiful bend of Copacabana Beach, now a world renowned hotspot for tourists from around the world. The neighborhood lives up to its nickname, A Princesinha do Mar or Princess of the Sea. Copa (short for Copacabana) is a paradise with stunning beaches, lively streets, where the party never seems to stop. Apart from being Rio’s egalitarian and eclectic neighborhood, romance and glamour are its obvious trademarks.",
  },
  {
    title: "Grayton, Florida",
    image: ["Grayton01", "Grayton02", "Grayton03"],
    text: "Grayton Beach is a small, undisturbed village in Northwest Florida and was the first community established in the area now known as South Walton. Located along the Gulf of Mexico between Pensacola and Panama City, Grayton Beach is home to a designated Blue Wave Beach and Grayton Beach State Park. The park is a 400-acre sliver of paradise featuring pristine sugar-sand beaches, a rare coastal dune lake and a wealth of nature. Its nature trail winds through a salt marsh, steep dunes and a coastal forest thick with twisted scrub oaks and magnolias.",
  },
  {
    title: "Le Morne, Mauritius",
    image: ["Le Morne01", "Le Morne02", "Le Morne03"],
    text: "Kite surfers, paragliders and deep-sea fishermen flock to windswept La Morne, a small village on the southwest side of Mauritius. Le Morne Brabant Mountain, a dramatic basaltic rock peak dotted with caves that once harbored runaway slaves, presides over luxury resorts and a wide beach widely regarded as the best on the island. Throw in a shimmering turquoise lagoon and gorgeous sunsets and calling the town paradise doesn't seem like a cliché.",
  },
];
let activeImage, boxIndex;
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const mainPage = document.getElementById("mainPage");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".closeModal");
const modalHeader = document.querySelector(".modalHeader");
const modalImage = document.querySelector(".modalImage");
const modalParagraph = document.querySelector(".modalParagraph");
const textBox = document.querySelectorAll(".textBox");
const back = document.querySelector(".back");
const forward = document.querySelector(".forward");

start();
function start() {
  playVideo();
  modalProperties();
  changeImage();
}
function playVideo() {
  btn.addEventListener("click", function () {
    if (!btn.classList.contains("slide")) {
      btn.classList.add("slide");
      video.pause();
    } else {
      btn.classList.remove("slide");
      video.play();
    }
  });
}
function modalProperties() {
  textBox.forEach((textBox) => {
    textBox.addEventListener("click", function () {
      boxIndex = this.getAttribute("boxIndex");
      activeImage = 1;
      mainPage.style.top = "-100%";
      modal.style.top = "0";
      modalHeader.textContent = modalData[boxIndex].title;
      modalImage.src =
        "Image/" + modalData[boxIndex].image[activeImage] + ".jpg";
      modalParagraph.textContent = modalData[boxIndex].text;
    });
    closeModal.addEventListener("click", function () {
      mainPage.style.top = "0";
      modal.style.top = "100%";
      back.style.display = "block";
      forward.style.display = "block";
    });
  });
}
function changeImage() {
  back.addEventListener("click", function () {
    activeImage--;
    modalImage.src = "Image/" + modalData[boxIndex].image[activeImage] + ".jpg";
    console.log(modalImage.src);
    console.log(boxIndex);
    if (activeImage == 0) {
      back.style.display = "none";
    }
    if (activeImage < modalData[boxIndex].image.length - 1) {
      forward.style.display = "block";
    }
  });
  forward.addEventListener("click", function () {
    activeImage++;
    modalImage.src = "Image/" + modalData[boxIndex].image[activeImage] + ".jpg";
    console.log(modalImage.src);
    console.log(boxIndex);
    if (activeImage > 0) {
      back.style.display = "block";
    }
    if (activeImage == modalData[boxIndex].image.length - 1) {
      forward.style.display = "none";
    }
  });
}
