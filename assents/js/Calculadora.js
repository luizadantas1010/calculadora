//variavel global

const visor = document.getElementById("resultado")

function insert(num) {

visor.textContent += num;

    
}

function clean() {
    
visor.textContent ="";

}

function backSpace() {

    let numeroVisor = visor.textContent;

    visor.textContent = numeroVisor.substring(0, numeroVisor.length - 1)
    
}

function calcular() {
    
    let calculo = visor.textContent;

    if (calculo.length > 2) {
  
    visor.textContent = eval(calculo)   

    } else {

        visor.textContent = "error!";
        visor.style.color = '#f00'
        visor.style.textAlign = 'center'
        

        setTimeout(() => {
            visor.textContent= "";

            visor.style.color = "#000"

            visor.style.textAlign = 'end'
        }, 1000);
        
    }


}