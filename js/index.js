
let btnForm = document.getElementById("btnForm")

btnForm.addEventListener("click", function(event){
    event.preventDefault();
    let isFormValid = validateInputs();
    console.log(isFormValid);
    
    if (isFormValid) {
        let firstNameInput = document.getElementById("nameInput").value.trim();
        let lastNameInput = document.getElementById("lastNameInput").value.trim();
        let phoneInput = document.getElementById("phoneInput").value.trim();
        let emailInput = document.getElementById("emailInput").value.trim();
        let descriptionInput = document.getElementById("descriptionInput").value.trim();
        let fullName = (firstNameInput + " " + lastNameInput).toUpperCase();

        let templateParams = {
            name: fullName,
            email: emailInput,
            phone: phoneInput,
            message: descriptionInput
        };

        emailjs.send('service_r0smniq', 'template_lo1829r', templateParams)
            .then(function() {
            Swal.fire({
                title: '¡Éxito!',
                text: 'Tu formulario se envió correctamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar',
            });
            }, function(error) {
            console.error('Error:', error);

            Swal.fire({
                title: '¡Error!',
                text: 'Ups! Algo salió mal',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });
        }); 

        // Vaciar textos
        document.getElementById("nameInput").value = "";
        document.getElementById("lastNameInput").value = "";
        document.getElementById("phoneInput").value = "";
        document.getElementById("emailInput").value = "";
        document.getElementById("descriptionInput").value = "";
        document.getElementById('rockCheck').checked=false;
        clearFormValidations();
    } else{
        Swal.fire({
                title: '¡Error!',
                text: 'Verifica los campos',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });
    }
})

function validateInputs(){
    // Limpiar validaciones
    clearFormValidations();

    // Obtener inputs
    let firstNameInput = document.getElementById("nameInput");
    let lastNameInput = document.getElementById("lastNameInput");
    let phoneInput = document.getElementById("phoneInput");
    let emailInput = document.getElementById("emailInput");
    let descriptionInput = document.getElementById("descriptionInput");
    const checkbox = document.getElementById('rockCheck');

    // Expresiones regulares
    let namePattern = /^[a-zA-Z\s]{3,}$/;
    let emailPattern = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
    let phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    let messagePattern = /^.{15,}$/;

    // Validación dinámica
    let isFormValid = true;

    const validations = [
    { input: firstNameInput, pattern: namePattern},
    { input: lastNameInput, pattern: namePattern},
    { input: emailInput, pattern: emailPattern},
    { input: phoneInput, pattern: phonePattern},
    { input: descriptionInput, pattern: messagePattern}
    ];

    validations.forEach(({ input, pattern, error }) => {
        const value = input.value.trim();
        if (!pattern.test(value)) {
            input.classList.add("is-invalid");
            isFormValid = false;
        } else{
            input.classList.add("is-valid");
        }
    });

    if (!checkbox.checked) {
        checkbox.classList.add('is-invalid');
        isFormValid = false;
    } else {
        checkbox.classList.add("is-valid");
    }

    return isFormValid;
}

function clearFormValidations(){
    // Obtener inputs
    let firstNameInput = document.getElementById("nameInput");
    let lastNameInput = document.getElementById("lastNameInput");
    let phoneInput = document.getElementById("phoneInput");
    let emailInput = document.getElementById("emailInput");
    let descriptionInput = document.getElementById("descriptionInput");
    let checkbox = document.getElementById('rockCheck');

    const arrayInputs = [firstNameInput, lastNameInput, phoneInput, emailInput, descriptionInput, checkbox];

    arrayInputs.forEach((input) =>{
        input.classList.remove("is-invalid");
        input.classList.remove("is-valid");
    })
    return;
}

(function(){
    emailjs.init({
        publicKey: "asi9cMjXhilAxb9gC",
    });
})();