
let btnForm = document.getElementById("btnForm")

btnForm.addEventListener("click", function(event){
    event.preventDefault();
    let isFormValid = validateInputs();

    if (isFormValid) {
        // Mandar el formulario
    } else{
        
        //alert("Revisa los campos del formulario")
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

    // Expresiones regulares
    let namePattern = /^[a-zA-Z\s]{3,}$/;
    let emailPattern = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
    let phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    let messagePattern = /^.{20,}$/;

    // Validación dinámica
    let isFormValid = true;

    const validations = [
    { input: firstNameInput, pattern: namePattern, error: "Nombre Erróneo" },
    { input: lastNameInput, pattern: namePattern, error: "Apellido Erróneo" },
    { input: emailInput, pattern: emailPattern, error: "Email Erróneo" },
    { input: phoneInput, pattern: phonePattern, error: "Teléfono Erróneo" },
    { input: descriptionInput, pattern: messagePattern, error: "Descripción Errónea" }
    ];

    validations.forEach(({ input, pattern, error }) => {
        const value = input.value.trim();
        if (!pattern.test(value)) {
            // console.log(error);
            input.classList.add("is-invalid");
            isFormValid = false;
        } else{
            input.classList.add("is-valid");
        }
    });

    
    return isFormValid;
}

function clearFormValidations(){
    // Obtener inputs
    let firstNameInput = document.getElementById("nameInput");
    let lastNameInput = document.getElementById("lastNameInput");
    let phoneInput = document.getElementById("phoneInput");
    let emailInput = document.getElementById("emailInput");
    let descriptionInput = document.getElementById("descriptionInput");

    const arrayInputs = [firstNameInput, lastNameInput, phoneInput, emailInput, descriptionInput];

    arrayInputs.forEach((input) =>{
        input.classList.remove("is-invalid");
        input.classList.remove("is-valid");
    })
    return;
}