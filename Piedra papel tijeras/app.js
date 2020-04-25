let puntuacionHumano = 0;
let puntuacionMaquina = 0;
let puntuacionHumano_out = document.getElementById('puntuacion_humano');
let puntuacionMaquina_out = document.getElementById('puntuacion_maquina');
const resultado_out = document.querySelector('anuncio > p');
const piedra_in = document.getElementById('piedra')
const papel_in = document.getElementById('papel')
const tijeras_in = document.getElementById('tijeras')

function jugadaMaquina() {
  const opciones = ['Piedra', 'Papel', 'Tijeras'];
  opcionMaquina = opciones[Math.floor(Math.random() * 3)];
  return opcionMaquina;
}

function juego(h,m) {
  if (h === 'Piedra' && m === 'Tijeras' || h === 'Papel' && m === 'Piedra' || h === 'Tijeras' && m === 'Papel'){
    console.log('Ganaste')
  } else if (h === 'Piedra' && m === 'Papel' || h === 'Papel' && m === 'Tijeras' || h === 'Tijeras' && m === 'Piedra'){
        console.log('Perdiste')
    } else {
            console.log('Empate')
        }

}

function main() {
  piedra_in.addEventListener('click', function(){
    juego('Piedra', jugadaMaquina());
    } )
  papel_in.addEventListener('click', function(){
    juego('Papel',jugadaMaquina());
  })
  tijeras_in.addEventListener('click', function(){
    juego('Tijeras',jugadaMaquina());
  })
}

main();
