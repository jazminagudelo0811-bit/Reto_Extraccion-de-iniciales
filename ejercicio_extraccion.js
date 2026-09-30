function obtenerInicial(nombreCompleto) {
     
    if(typeof nombreCompleto !== "string" || nombreCompleto.trim() === ""){
    return "entrada invalida";         
}
//divide el string por espacios y elementos vacios,
//extraer la primera letra de cada palabra y se pasa a mayuscula y unirlas.

return nombreCompleto
.trim()
.split(/s\+/)
.map(palabra => palabra [0].toUpperCase())
.join("");

}

//--- Prueba con consola ---
console.log(obtenerIniciales("Luz Emilse Almeida Bueno"));  //Salida: "LEAB"
console.log(obtenerIniciales("Pedro Nelson Agudelo Cortes")); //Salida: "PNAC"
console.log(obtenerIniciales("Jazmin Paola")); //Salida: "JP"
console.log(obtenerIniciales("")); //Salida: "entrada invalida"
