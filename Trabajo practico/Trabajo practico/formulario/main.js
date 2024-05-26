const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresionesRegulares = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,16}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto: /^[a-zA-Z0-9\_\-]{4,16}$/, 
    mensaje: /^[a-zA-ZÀ-ÿ\s]{1,100}$/,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case 'nombre':
            validarCampo(expresionesRegulares.nombre, e.target, 'nombre');
        break;
        case 'email':
            validarCampo(expresionesRegulares.email, e.target, 'email');
        break;
        case 'asunto':
            validarCampo(expresionesRegulares.asunto, e.target, 'asunto');
        break;
        case 'mensaje':
            validarCampo(expresionesRegulares.mensaje, e.target, 'mensaje');
        break;
    }
}

const campos = {
    nombre: false,
    email: false,
    asunto: false,
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .form-parrafo`).classList.remove('form-parrafo-activo');
        campos[campo] = true;
    }else{
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} .form-parrafo`).classList.add('form-parrafo-activo');
        campos[campo] = false;
    }
    
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');
    if(campos.nombre && campos.email && campos.asunto && terminos.checked){
        formulario.reset();

        document.querySelector('#formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.querySelector('#formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 1500);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) =>{
            icono.classList.remove('formulario__grupo-correcto');
        })
    }else{
        document.querySelector('#formulario__mensaje').classList.add('formulario__mensaje-activo');
        setTimeout(() => {
            document.querySelector('#formulario__mensaje').classList.remove('formulario__mensaje-activo');
        }, 1500);
    }
})