// // 1. Selecionar os elementos
// const titulo = document.querySelector('h1');
// const card = document.querySelector('.profile-card');
// // 2. Adicionar o evento de clique
// btn.addEventListener('click', () => {
// // 3. Lógica: Alternar cor de fundo
// if (card.style.backgroundColor === 'rgb(243, 244, 246)') {
// card.style.backgroundColor = '#FFFFFF';
// } else {
// card.style.backgroundColor = '#F3F4F6';
// }
// console.log('Tema alterado!');
// const titulo = document.querySelector('h1');
// titulo.style.backgroundColor = '#F59E0B';
// });

const botao = document.querySelector('.theme-button');
const conteudo = document. querySelector('.container');

botao.onclick = () => {
    conteudo.classList.toggle('dark');
};

const elemento = document.getElementById('typewriter');
const texto = "Desenvolvedora Web em formação, apaixonada por tecnologia e aprendizado contínuo.";
let i = 0;
let apagando = false;
// apagando --> apagando == true
// ! apagando --> apagando == false ou apagando != true
elemento.innerText = "";

function typewriter(){
    const velocidade = (apagando == true) ? 25 : 50;}

