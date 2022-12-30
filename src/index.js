const pizzaImagePhone = document.querySelector('.pizza__image-phone');
const pizzaImageDesktop = document.querySelector('.pizza__image-desktop');
const overlay = document.querySelector('.pizza__image-overlay');

const setPizaImage = () => {
    if (window.innerWidth < 768) {
        pizzaImagePhone.style.backgroundImage = "url('../src/images/Banner_Pizza-removebg.png')";
    } else {
        pizzaImageDesktop.style.backgroundImage = "url('../src/images/Banner_Pizza_cropped.jpg')";
        pizzaImageDesktop.style.backgroundSize = "cover";
        pizzaImageDesktop.style.position = "absolute";
        pizzaImageDesktop.style.top = "0";
        pizzaImageDesktop.style.background

        overlay.style.backgroundColor = "rgba(62, 40, 40, 0.3)";
    }
}

setPizaImage();