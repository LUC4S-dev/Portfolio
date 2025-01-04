// abre e fecha menu lateral no mobile

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains('bi-list')
        ? menuMobile.classList.replace('bi-list', 'bi-x')
        : menuMobile.classList.replace('bi-x', 'bi-list');

    body.classList.toggle("menu-nav-active");

});

// Fecha o menu quando lcicar em algum item e muda o icone para list

const navItem = document.querySelectorAll(".nav-item")

navItem.forEach(e => {
    e.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }

    })
});

// Ativar carregamento no botão ao enviar requisição

const btnEnviar = document.querySelector("#btn-enviar")
const btnEnviarLoader = document.querySelector("#btn-enviar-loader")

btnEnviar.addEventListener("click", ()=>{
    btnEnviarLoader.style.display ="block";
    btnEnviar.style.display = "none"
})

// Tirar mensagem após 5 segindos

setTimeout(() => {
   document.querySelector("#alerta").style.display='none';
}, 5000);