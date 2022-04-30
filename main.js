const input = document.querySelector('.input');

const numeros = document.querySelectorAll('.grid-item');

const operadores = document.querySelectorAll('.operator');

const Borrar = document.querySelector('.clear');

const Sumar = document.querySelector('#equal');

let resultado = false;

for (let numero of numeros) {
  
  numero.addEventListener('click', () => {
  if (resultado) {
    input.innerHTML = "";
  }
  if (input.innerHTML === 'malvado bruto') {
      input.innerHTML = '';
  }
  if (numero.innerHTML === '=') {
      return;
  }
  input.innerHTML += numero.innerHTML;
  });
}

for (let operator of operadores) {
  operator.addEventListener('click', () => {
    if (
      input.innerHTML == '' ||
      isNaN(input.innerHTML.slice(-1))
    ) {
      return;
    }
    input.innerHTML += operator.innerHTML;
    resultado = false
    
  });
}

Borrar.addEventListener('click', () => {
  input.innerHTML = '';
});

Sumar.addEventListener('click', () => {
  const inputValue = input.innerHTML
    .replace(/×/g, '*')
    .replace(/÷/g, '/');

  const lastChar = inputValue.slice(-1);

  if (isNaN(lastChar)) {
    input.innerHTML = 'malvado bruto';

  } else {
    input.innerHTML = eval(inputValue);
    resultado = true
  }
  console.log(resultado);
});


// 'mundo'.slice(-1); // "o"

// console.log(numeros);

// document.getElementById
// document.getElementsByTagNameNS

// console.log(elemento);

// document.addEventListener('click', function () {
//     console.log('se clickeo el documento');
// })
