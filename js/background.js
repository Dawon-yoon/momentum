const images = [
  "japanphoto01.avif",
  "japanphoto02.avif",
  "japanphoto03.avif",
  "japanphoto04.avif",
  "japanphoto05.avif",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("backgroundimg");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);
