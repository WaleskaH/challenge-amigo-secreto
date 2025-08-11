
//Agregar amigos a la lista
let nombresAmigos = [];
function agregarAmigo(){
    let nuevoDato = document.getElementById("amigo").value;
    
//Alerta en caso de que no haya datos
    if(nuevoDato === ""){
        alert("Por favor, inserte un nombre");
        return; 
    }
   
//Asegurar de que no haya nombres repetidos

    let nombreExistente = nombresAmigos.some(nombre => nombre.toLowerCase() === nuevoDato.toLowerCase());
    if (nombreExistente){
        alert("Este nombre ya ha sido agregado. Por favor, ingrese un nombre diferente.");
        return; 
    }
   
   //Agregar el nuevo nombre al Array
   
    nombresAmigos.push(nuevoDato);
    console.log(nombresAmigos);
    
   
    //Esto limpia el campo de entrada
    document.getElementById("amigo").value = "";

//Obtener el elemento de la lista
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 
    
    //Iteración sobre el Array
    for(let i = 0; i < nombresAmigos.length; i++){
        let li = document.createElement("li");
        li.textContent = nombresAmigos[i];
        listaAmigos.appendChild(li);
    }
}


//Selección aleatoria de amigos secretos
   
function sortearAmigo() {
    if (nombresAmigos.length === 0) {
        alert ("No hay amigos en la lista para seleciconar.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    let amigoSecreto = nombresAmigos[indiceAleatorio];

    alert("Tu amigo secreto es: " + amigoSecreto);

}



    
