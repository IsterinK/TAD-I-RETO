function algoritmoBurbujaAsc() {
    let arrayNumeros= [344,122,12,46,7,-23,32,3234];
    let posicionFinal= arrayNumeros.length;

    for(let i=0; i<arrayNumeros.length;i++){
        for(let j=0;j<posicionFinal-1-i;j++){
            (arrayNumeros[j] > arrayNumeros[j + 1]) ? [arrayNumeros[j], arrayNumeros[j + 1]] = [arrayNumeros[j + 1], arrayNumeros[j]] : '';
        }
    }
    console.log(arrayNumeros);
}

function algoritmoBurbujaDsc() {
    let arrayNumeros= [344,122,12,46,7,-23,32,3234];
    let posicionFinal= arrayNumeros.length;

    for(let i=0; i<arrayNumeros.length;i++){
        for(let j=0;j<posicionFinal-1-i;j++){
            (arrayNumeros[j] < arrayNumeros[j + 1]) ? [arrayNumeros[j], arrayNumeros[j + 1]] = [arrayNumeros[j + 1], arrayNumeros[j]] : '';
        }
    }
    console.log(arrayNumeros);
}

function algoritmoSeleccionAsc() {
    let arrayNumeros= [344,122,12,46,7,-23,32,3234];
    let posicionFinal= arrayNumeros.length;
        for (let i = 0; i < posicionFinal; i++) {
            let min = i;
            for (let j = i + 1; j < posicionFinal; j++) {
                if (arrayNumeros[min] > arrayNumeros[j]) {
                    min = j;
                }
            }
            if (min !== i) {
                let tmp = arrayNumeros[i];
                arrayNumeros[i] = arrayNumeros[min];
                arrayNumeros[min] = tmp;
            }
        }
    console.log(arrayNumeros);
}

function algoritmoSeleccionDsc() {
    let arrayNumeros= [344,122,12,46,7,-23,32,3234];
    let posicionFinal= arrayNumeros.length;
        for (let i = 0; i < posicionFinal; i++) {
            let min = i;
            for (let j = i + 1; j < posicionFinal; j++) {
                if (arrayNumeros[min] < arrayNumeros[j]) {
                    min = j;
                }
            }
            if (min !== i) {
                let tmp = arrayNumeros[i];
                arrayNumeros[i] = arrayNumeros[min];
                arrayNumeros[min] = tmp;
            }
        }
    console.log(arrayNumeros);
}

function algoritmoInsercionAsc() {
    let arrayNumeros= [344,122,12,46,7,-23,32,3234];
    let posicionFinal= arrayNumeros.length;
    
        for (let i = 1; i < posicionFinal; i++){
            let tmp= arrayNumeros[i];
            let j = i-1; 
            while ((j > -1) && (tmp < arrayNumeros[j])) {
                arrayNumeros[j+1] = arrayNumeros[j];
                j--;
            }
            arrayNumeros[j+1] = tmp;
        }
    console.log(arrayNumeros);
}

function algoritmoInsercionDsc() {
    let arrayNumeros= [344,122,12,46,7,-23,32,3234];
    let posicionFinal= arrayNumeros.length;
    
        for (let i = 1; i < posicionFinal; i++){
            let tmp= arrayNumeros[i];
            let j = i-1; 
            while ((j > -1) && (tmp > arrayNumeros[j])) {
                arrayNumeros[j+1] = arrayNumeros[j];
                j--;
            }
            arrayNumeros[j+1] = tmp;
        }
    console.log(arrayNumeros);
}

function showSelected(){
    let seleccion=document.getElementById("algoritmoSeleccionado").value
    /* Validar la seleccion del checkbox */
    if((seleccion==="1") && (document.getElementById("algOrd1").checked)){
        console.log(algoritmoBurbujaDsc());
    }else if((seleccion==="1") && (document.getElementById("algOrd2").checked)){
        console.log(algoritmoBurbujaAsc());
    }else if((seleccion==="2") && (document.getElementById("algOrd1").checked)){
        console.log(algoritmoInsercionDsc());
    }else if((seleccion==="2") && (document.getElementById("algOrd2").checked)){
        console.log(algoritmoInsercionAsc());
    }else if((seleccion==="3") && (document.getElementById("algOrd1").checked)){
        console.log(algoritmoSeleccionDsc());
    }else if((seleccion==="3") && (document.getElementById("algOrd2").checked)){
        console.log(algoritmoSeleccionAsc());
    }
}

function añadirElementoFinalArray(){
    let arrayFrameworks= new Array();
    arrayFrameworks.push("laravel","Angular","Simphony");
    console.log(arrayFrameworks);

}
console.log(añadirElementoFinalArray());

function añadirElementoInicioArray(){
    let arrayFrameworks= new Array();
    arrayFrameworks.push("laravel","Angular","Simphony");
    arrayFrameworks.unshift("Go","React");
    console.log(arrayFrameworks);
}
console.log(añadirElementoInicioArray());

function eliminarElementoFinalArray(){
    let arrayFrameworks= new Array();
    arrayFrameworks.push("laravel","Angular","Simphony","React","GO","TS");
    arrayFrameworks.pop();
    console.log(arrayFrameworks);
}
console.log(eliminarElementoFinalArray());

function eliminarElementoInicialArray(){
    let arrayFrameworks= new Array();
    arrayFrameworks.push("laravel","Angular","Simphony","React","GO","TS");
    arrayFrameworks.shift();
    console.log(arrayFrameworks);
}
console.log(eliminarElementoInicialArray());











