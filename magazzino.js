/*
*Script che gestisce un magazzino temporaneo su una pagina
*/
var magazzino = [ "pesche", "mele", "pere" ]; //contenitore oggetti
var Q = [3,3,3];                              //quantità degli oggetti
var max = 20.0;
var qnt = 9.0;
/**
 * @brief mostra lo spazio disponibile
 * @return null
 */
function space_left(){
    //aggiorno il contatore sulla pagina
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
        
    space_left();
};

/**
 * @brief aggiunge i campi per poter ordinare altri prodotti
 * @return null
 */
function newOrder(){
    //prendo gli oggetti della pagina
    var button = document.getElementById("btnOrder");
    var lblProduct = document.getElementById("lblProduct");
    var txtbProduct = document.getElementById("txtbProduct");
    var lblAmount = document.getElementById("lblAmount");
    var txtbAmount = document.getElementById("txtbAmount");
    
    //solo se non sono già stati aggiunti
    //gli aggiungo uno ad uno
    if (lblProduct == null){
        var lbl = document.createElement("B");
        lbl.setAttribute("id", "lblProduct");
        var t = document.createTextNode("Nome Prodotto: ");
        lbl.appendChild(t);
        document.body.appendChild(lbl);
    }
    
    if (txtbProduct == null){
        var txt = document.createElement("INPUT");
        txt.setAttribute("type", "text"); 
        txt.setAttribute("id", "txtbProduct");
        document.body.appendChild(txt);
    }
    
    if (lblAmount == null){
        var lbl = document.createElement("B");
        lbl.setAttribute("id", "lblAmount");
        var t = document.createTextNode("Quantità: ");
        lbl.appendChild(t);
        document.body.appendChild(lbl);
    }
    
    if (txtbAmount == null){
        var txt = document.createElement("INPUT");
        txt.setAttribute("type", "number"); 
        txt.setAttribute("value", "0");
        txt.setAttribute("id", "txtbAmount");
        document.body.appendChild(txt);
    }
    
    if (button == null){
        button = document.createElement("button");
        button.setAttribute("id", "btnOrder");
        button.setAttribute("onClick", "order()");
        var text = document.createTextNode("Ordina Prodotto!");
        button.appendChild(text);
        document.body.appendChild(button);
    }
};

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
        window.alert(key + " " + amount);
        //aggiungo il nuovo prodotto in magazzino
        magazzino[magazzino.length]=key;
        Q[Q.length]=amount;
        //aggiorno cmq lo spazio
        qnt += amount;
    }
    //informo l'utente che lo spazio non é sufficiente
    if (qnt >= max){
        window.alert("Attention! There is no more space!");    
    }
    space_left();
    init();
};


