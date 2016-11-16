/*
*Script che gestisce un magazzino temporaneo su una pagina
*/
var magazzino = [ "pesche", "mele", "pere" ]; //contenitore oggetti
var Q = [3,3,3];                              //quantità degli oggetti
var max = 20.0;                               //massimo spazio disponibile in magazzino
var qnt = 9.0;                                //quantità presente in magazzino
/**
 * @brief mostra lo spazio disponibile
 * @return null
 */
function space_left(){
    //aggiorno il visualizzatore dello spazio disponibile sulla pagina
    var cont = document.getElementById("available");        //prendo l'oggetto
    cont.innerHTML = "Available Space: " + (max-qnt).toString();  //aggiorno l html
};

/**
 * @brief inizializza visualmente il magazzino di default e li visualizza sulla pagina
 * @return null
 */
function init(){
    //prendo la tabella 
    var table = document.getElementById("myTable");
    //prima cancello se c'erà un eventuale riga
    document.getElementById("myTable").deleteRow(-1);
    var row = table.insertRow(0);           //nuova riga
    
    for (i=0; i<magazzino.length; i++){
        var cell = row.insertCell(-1);                  //appendo una cella in fondo alla riga
        cell.innerHTML = magazzino[i] + " - " + Q[i];  //inserisco il prodotto
        cell.style.border = "1px solid #000";
    }
    space_left();   //aggiorno pagina
};

/**permette di inserire un nuovo prodotto
 * @return null
 */
function order_new(){
    //prendo gli oggetti della pagina
    var button = document.getElementById("btnOrder");
    var lblProduct = document.getElementById("lblProduct");
    var txtbProduct = document.getElementById("txtbProduct");
    var lblAmount = document.getElementById("lblAmount");
    var txtbAmount = document.getElementById("txtbAmount");
    
    //basta che controllo solo se uno é invisibile
    if( (button.style.visibility == "hidden") ){
        
        //li metto tutti visibili
        button.style.visibility = "visible";
        lblProduct.style.visibility = "visible";
        lblAmount.style.visibility = "visible";
        txtbAmount.style.visibility = "visible";
        txtbProduct.style.visibility = "visible";
        
        //aggiorno il contenuto
        txtbAmount.value = "";
        txtbProduct.value = "";
        
    }else{
        //li rendo invisibili
        button.style.visibility = "hidden";
        lblProduct.style.visibility = "hidden";
        lblAmount.style.visibility = "hidden";
        txtbAmount.style.visibility = "hidden";
        txtbProduct.style.visibility = "hidden";
    }
        
}


/**
 * @brief ordina un'altro oggetto e informa se non c'é più spazio
 * @return null
 */
function order(){
    //carico i dati del prodotto da ordinare
    var key = document.getElementById("txtbProduct").value;
    var amount = parseFloat(document.getElementById("txtbAmount").value);
    var check = false;
    
    for(i=0; i<magazzino.length; i++){
        //controllo per tutti i prodotti 
        //se ci sono già
        if (magazzino[i] == key){
            //aggiorno il magazzino
            Q[i] += amount;
            qnt += amount; //aggiorno spazio restante
            check = true;   
        }
    }
     
    //se il prodotto non c'era già
    if (check == false){
        //aggiungo il nuovo prodotto in magazzino
        magazzino[magazzino.length]=key;
        Q[Q.length]=amount;
        //aggiorno cmq lo spazio
        qnt += amount;
    }
    //informo l'utente che lo spazio non é sufficiente
    if (qnt >= max){
        window.alert("Attenzione! Lo spazio nel magazzino non e' sufficiente!");    
    }
    space_left();
    init();
};

/**
 * @brief aumenta lo spazio in magazzino
 * @return null
 */
function more(){
    var space = document.getElementById("space").value;
    max += parseFloat(space); //aggiorno spazio
    if (space < 0){
        window.alert("Hai diminuito lo spazio invece che aumentarlo!");
    }
    space_left();             //aggiorno pagina 
}

/**
 * @brief Some mostra e nasconde i gli input per aggiornare lo spazio in magazzino
 * @return null
 */
function showMore(){
    //recupero gli elementi
    var a = document.getElementById("space");
    var b = document.getElementById("btnSpace");
    if ((a.style.visibility == "hidden") && (b.style.visibility == "hidden")){
        space.value = 0;
        a.style.visibility = "visible";     //rendo visibili se erano nascosti
        b.style.visibility = "visible";
    }else{
        a.style.visibility = "hidden";      //rendo nascosti
        b.style.visibility = "hidden";
    }
}















