const pizzaImage = document.querySelectorAll('.pizza__image');

pizzaImage.forEach((item) => {

    item.style.backgroundImage = "url('../src/images/Banner_Pizza_cropped.jpg')";
    item.style.backgroundSize = "cover";
    item.style.position = "absolute";
    item.style.top = "0";
});
