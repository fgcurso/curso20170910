const elementoFormulario = document.querySelector('form');

const elementoNombre =
document.querySelector('input[name="nombre"]');

elementoFormulario.addEventListener("onsubmit", onSubmit)

function onSubmit() {
    let valido = true;
    if (!elementoNombre.value) {
        valido = false;
    }

    console.log(valido);

    return valido;
}