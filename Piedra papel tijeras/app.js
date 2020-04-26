const piedra_en = document.getElementById('piedra');
const papel_en = document.getElementById('papel');
const tijeras_en = document.getElementById('tijeras');
let conVicHum = 0;
let conVicMaq = 0;

function juego(h,m) {
  if (h === 'pi' && m === 'ti' ) {
    p_uno.innerHTML = 'Piedra rompe Tijeras';
    p_dos.innerHTML = 'Ganaste';
    conVicHum++;
    puntuacion_humano.innerHTML = conVicHum;
    eleccion_h_pi.classList.add('aura-verde');
    eleccion_m_ti.classList.add('aura-roja');
  }
   else if (h === 'pa' && m === 'pi' ) {
    p_uno.innerHTML = 'Papel cubre Piedra';
    p_dos.innerHTML = 'Ganaste';
    conVicHum++;
    puntuacion_humano.innerHTML = conVicHum;
    eleccion_h_pa.classList.add('aura-verde');
    eleccion_m_pi.classList.add('aura-roja');
  }
   else if (h === 'ti' && m === 'pa' ) {
    p_uno.innerHTML = 'Tijeras cortan Papel';
    p_dos.innerHTML = 'Ganaste';
    conVicHum++;
    puntuacion_humano.innerHTML = conVicHum;
    eleccion_h_ti.classList.add('aura-verde');
    eleccion_m_pa.classList.add('aura-roja');
  }
  else if (h === 'pi' && m === 'pa' ) {
    p_uno.innerHTML = 'Papel cubre Piedra';
    p_dos.innerHTML = 'Perdiste';
    conVicMaq++;
    puntuacion_maquina.innerHTML = conVicMaq;
    eleccion_m_pa.classList.add('aura-verde');
    eleccion_h_pi.classList.add('aura-roja');
  }
  else if (h === 'pa' && m === 'ti' ) {
    p_uno.innerHTML = 'Tijeras cortan Papel';
    p_dos.innerHTML = 'Perdiste';
    conVicMaq++;
    puntuacion_maquina.innerHTML = conVicMaq;
    eleccion_m_ti.classList.add('aura-verde');
    eleccion_h_pa.classList.add('aura-roja');
  }
  else if (h === 'ti' && m === 'pa' ) {
    p_uno.innerHTML = 'Tijeras cortan Papel';
    p_dos.innerHTML = 'Perdiste';
    conVicMaq++;
    puntuacion_maquina.innerHTML = conVicMaq;
    eleccion_m_pa.classList.add('aura-verde');
    eleccion_h_ti.classList.add('aura-roja');
  }
  else {
    p_uno.innerHTML = '-';
    p_dos.innerHTML = 'Empate';
    eleccion_m_pa.classList.remove('aura-verde','aura-roja');
    eleccion_m_ti.classList.remove('aura-verde','aura-roja');
    eleccion_m_pi.classList.remove('aura-verde','aura-roja');
    eleccion_h_ti.classList.remove('aura-verde','aura-roja');
    eleccion_h_pa.classList.remove('aura-verde','aura-roja');
    eleccion_h_pi.classList.remove('aura-verde','aura-roja');
  }
}

function jugadaMaquina() {
  const opciones = ['pi', 'pa', 'ti'];
  opcionMaquina = opciones[Math.floor(Math.random() * 3)];
  if (opcionMaquina == 'pi') {
    eleccion_m_pi.style.display = 'inline-block'
    eleccion_m_pa.style.display = 'none'
    eleccion_m_ti.style.display = 'none'
  }
   else if (opcionMaquina == 'pa') {
    eleccion_m_pi.style.display = 'none'
    eleccion_m_pa.style.display = 'inline-block'
    eleccion_m_ti.style.display = 'none'
  }
  else if (opcionMaquina == 'ti'){
    eleccion_m_pi.style.display = 'none'
    eleccion_m_pa.style.display = 'none'
    eleccion_m_ti.style.display = 'inline-block'
  }
  return opcionMaquina;
}

function main() {
  piedra_en.addEventListener('click', function(){
    eleccion_h_pi.style.display = 'inline-block'
    eleccion_h_pa.style.display = 'none';
    eleccion_h_ti.style.display = 'none';
    juego('pi',jugadaMaquina());
  } )
  papel_en.addEventListener('click', function(){
    eleccion_h_pi.style.display = 'none';
    eleccion_h_pa.style.display = 'inline-block';
    eleccion_h_ti.style.display = 'none';
    juego('pa',jugadaMaquina());
  })
  tijeras_en.addEventListener('click', function(){
    eleccion_h_pi.style.display = 'none';
    eleccion_h_pa.style.display = 'none';
    eleccion_h_ti.style.display = 'inline-block';
    juego('ti', jugadaMaquina());
  })
}

main();
