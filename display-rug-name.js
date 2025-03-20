document.addEventListener("DOMContentLoaded", function() {
    const rugNameInput = document.querySelector('input[name="117324478"]');
    const htmlBlock = document.querySelector("#your-html-block-id");

    if (rugNameInput && htmlBlock) {
        rugNameInput.addEventListener("input", function() {
            htmlBlock.innerText = rugNameInput.value;
        });
    }
});
