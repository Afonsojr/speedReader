const result = document.querySelector(".teste");
const input = document.querySelector("input");

// TODO texto priveniente de um input
const texto =
  "Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do de Finibus Bonorum et Malorum (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, Lorem Ipsum dolor sit amet... vem de uma linha na seção 1.10.32.";
const texto2Array = texto.split(" ");
const textoLength = texto2Array.length - 1;
input.max = textoLength;

let contador = 0;
const timer = setInterval(() => {
  let word = texto2Array[contador];
  result.textContent = `${word}`;

  input.value = contador;
  if (contador >= textoLength) {
    clearInterval(timer);
  } else {
    contador++;
  }
}, 250);

// `${word.slice(0,3)}${word.slice(3,5)}${word.slice(5)}`
document.addEventListener("input", () => {
  contador = input.value;
});
