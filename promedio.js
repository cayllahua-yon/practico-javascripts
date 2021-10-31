// const lista1 = [
//     100,
//     200,
//     300,
//     500,
// ];

// let sumaLista1 = 0;
// for (let i = 0; i < lista1.length; i++) {
//    sumaLista1 = sumaLista1 + lista1[i];  
// }

// const promedioLista = sumaLista1 / lista.length;

// mejorando

function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //   sumaLista = sumaLista + lista[i];
    // }
  
    const sumaLista = lista.reduce( //va recibir una funcion 
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
  
    const promedioLista = sumaLista / lista.length;
  
    return promedioLista;
  }