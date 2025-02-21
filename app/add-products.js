import './add-products.scss';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("addProductForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Form validation
        if (!form.checkValidity()) {
            event.stopPropagation();
            form.classList.add("was-validated");
            return;
        }

        // Getting form values
        const title = document.getElementById("productTitle").value;
        const description = document.getElementById("productDescription").value;
        const price = document.getElementById("productPrice").value;
        const quantity = document.getElementById("productQuantity").value;

        alert(`Product Added: \nTitle: ${title}\nDescription: ${description}\nPrice: $${price}\nQuantity: ${quantity}`);

        // Reset the form
        form.reset();
        form.classList.remove("was-validated");
    });
});
