var magazzino = { pesche:3 , mele:4 , pere:5 }

function init(){
    var table = document.getElementById("myTable");
    
    if (table == null){
        table = document.createElement("TABLE");
        table.setAttribute("id", "myTable");
        document.body.appendChild(table);
        
        var row = table.insertRow(0);
    
        for (key in magazzino){
            var cell = row.insertCell(-1);
            cell.innerHTML = key + " - " + magazzino[key];
            cell.style.border = "1px solid #000"
        };
    };
};


