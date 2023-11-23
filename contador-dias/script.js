const novoAno = "1 Jan 2024";

const diasEl = document.getElementById('dias')
const horasEl = document.getElementById('horas')
const minutosEl = document.getElementById('minutos')
const segundosEl = document.getElementById('segundos')

function contagem(){
    const anoAtual = new Date(novoAno);
    const dataAtual = new Date();

    const segundosTotal = (anoAtual - dataAtual) / 1000;

    const dias = Math.floor(segundosTotal / 3600 / 24);
    const horas = Math.floor(segundosTotal / 3600) % 24;
    const minutos = Math.floor(segundosTotal / 60) % 60;
    const segundos = Math.floor(segundosTotal) % 60;
    

    diasEl.innerHTML = dias; 
    horasEl.innerHTML = formatarTempo(horas); 
    minutosEl.innerHTML = formatarTempo(minutos); 
    segundosEl.innerHTML = formatarTempo(segundos); 

}

function formatarTempo(tempo){
    return tempo < 10 ? (`0${tempo}`) : tempo;
}


contagem();

setInterval(contagem, 1000);
