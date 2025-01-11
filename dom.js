document.addEventListener('DOMContentLoaded', () => {
    const flowers = document.querySelectorAll('.flower');
    const basket = document.getElementById('basket');
    const basketMessage = document.getElementById('basket-message');
    const changeTextColor = document.getElementById('changeTextColor');
    const changeBackgroundColor = document.getElementById('changeBackgroundColor');
    const textToChange = document.getElementById('text-to-change');

    // Tambahkan garis kotak hitam untuk basket message
    basketMessage.style.border = "2px solid black";
    basketMessage.style.padding = "10px";
    basketMessage.style.marginTop = "10px";

    // Add flower to basket
    flowers.forEach(flower => {
        flower.addEventListener('click', () => {
            const newFlower = document.createElement('img');
            newFlower.src = flower.src;
            newFlower.alt = flower.alt;

            // Add click event to remove flower
            newFlower.addEventListener('click', () => {
                basket.removeChild(newFlower);
                updateBasketMessage();
            });

            basket.appendChild(newFlower);
            updateBasketMessage();
        });
    });

    // Update basket message
    const updateBasketMessage = () => {
        const flowerCount = basket.querySelectorAll('img').length;
        basketMessage.textContent = `The flower basket currently contains ${flowerCount} flowers.`;
    };

    // Change text color for paragraph only
    changeTextColor.addEventListener('click', () => {
        const color = prompt('Input your text color (e.g., red, blue, #123456):');
        if (color) {
            textToChange.style.color = color;
        }
    });

    // Change background color for the entire page
    changeBackgroundColor.addEventListener('click', () => {
        const color = prompt('Input your background color (e.g., yellow, green, #abcdef):');
        if (color) {
            document.body.style.backgroundColor = color;
        }
    });
});
