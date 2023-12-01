const images = {
  messi: ["/image/2.jpg", "/image/3.jpg", "/image/4.jpeg", "/image/5.jpg"],
  ronaldo: [
    "/image/ronaldo1.jpg",
    "/image/ronaldo2.jpg",
    "/image/ronaldo3.jpg",
    "/image/ronaldo4.jpg",
  ],
  neymar: [
    "/image/neymar1.jpg",
    "/image/neymar2.jpeg",
    "/image/neymar3.jpeg",
    "/image/neymar4.jpeg",
  ],
};

function changeImage(player) {
  const randomIndex = Math.floor(Math.random() * images[player].length);
  const randomImage = images[player][randomIndex];
  document.getElementById("random_image").src = randomImage;
}

document
  .getElementById("change_image_btn")
  .addEventListener("click", function () {
    changeImage("messi");
  });

document
  .getElementById("change_image_btn_two")
  .addEventListener("click", function () {
    changeImage("ronaldo");
  });
document
  .getElementById("change_image_btn_thare")
  .addEventListener("click", function () {
    changeImage("neymar");
  });
