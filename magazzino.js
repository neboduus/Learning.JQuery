/*
*Script che gestisce un magazzino temporaneo su una pagina
*/
var magazzino = { pesche:3 , mele:4 , pere:5 } 
var max = 20;

function space_left(){
    c = 0;
    for (key in magazzino){
            c += parseInt(magazzino[key]);
        };
    c = max - c;
    max = c;
    
    //aggiorno il contatore sulla pagina
    var cont = document.getElementById("available");
    cont.innerHTML = "Available Space - " + c.toString();
    
    if (c > max){
        allert("Il magazzino é troppo pieno!");
    }
}

/**
 * @brief inizializza un magazzino di default e li visualizza sulla pagina
 * @return null
 */
function init(){
    //provo a vedere se la tabella c'é già
    var table = document.getElementById("myTable");
    //se non c'é la creo
    if (table == null){
        table = document.createElement("TABLE");
        table.setAttribute("id", "myTable");    //imposto l'id
        document.body.appendChild(table);       //appendo la tabella al bpdy
        
        var row = table.insertRow(0);           //nuova riga
    
        for (key in magazzino){
            var cell = row.insertCell(-1);                  //appendo una cella in fondo alla riga
            cell.innerHTML = key + " - " + magazzino[key];  //inserisco il prodotto
            cell.style.border = "1px solid #000"
        };
    };
    space_left();
};

/**
 * @brief aggiunge i campi per poter ordinare altri prodotti
 * @return Description of returned value.
 */
function newOrder(){
    var button = document.getElementById("btnOrder");
    var lblProduct = document.getElementById("lblProduct");
    var txtbProduct = document.getElementById("txtbProduct");
    var lblAmount = document.getElementById("lblAmount");
    var txtbAmount = document.getElementById("txtbAmount");
    
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
        var text = document.createTextNode("Order more!");
        button.appendChild(text);
        document.body.appendChild(button);
    }
};

function order(){
    var key = document.getElementById("txtbProduct").valueOf;
    var amount = document.getElementById("txtbAmount").value;
    var chk = false;
    
    for(k in magazzino){
        if (k == key){
            magazzino[k] += amount;
            chk = true;
        };
    };
    
    if (chk == false){
        magazzino[key] = amount;
    }
    space_left();
};




