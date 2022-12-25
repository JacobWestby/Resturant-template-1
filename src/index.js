const pizzaImage = document.querySelector('.pizza__image');

const setPizaImage = () => {
    if (window.innerWidth < 768) {
        pizzaImage.style.backgroundImage = "url('../src/images/Banner_Pizza-removebg.png')";
    } else {
        pizzaImage.style.backgroundImage = "url('../src/images/Banner_Pizza_cropped.jpg')";
        pizzaImage.style.backgroundSize = "cover";
        pizzaImage.style.position = "absolute";
        pizzaImage.style.top = "0";
        // pizzaImage.style.backgroundPosition = "-650px 0";
    }
}

setPizaImage();