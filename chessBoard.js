var rows = ['1', '2', '3', '4', '5', '6', '7', '8'];
//side numbers for rows
var div = document.createElement('div');
document.getElementsByTagName('div')[0].appendChild(div);

//chess board div
var div2 = document.createElement('div'); 
 
var ChessTable = document.createElement('table');

var num = 0;

for (var i = 0; i < 8; i++) {
 
            // Create a row
    var tr = document.createElement('tr');

    var p =document.createElement('p');
    p.innerHTML = rows[i];
    div.appendChild(p);

    for (var j = 0; j < 8; j++) {
        // Create a cell
        var td = document.createElement('td');

        num++;
    
        if ((i + j) % 2 == 0) {
            
                td.setAttribute('id', num);
                td.setAttribute('class', 'cell whitecell');
                tr.appendChild(td);
            }
     
            else {
 
                td.setAttribute('id', num);
                td.setAttribute('class', 'cell blackcell');
                tr.appendChild(td);
            }
        }
       
        ChessTable.appendChild(tr);
    }
        //put chess table inside the second div
        div2.appendChild(ChessTable);
 
        ChessTable.setAttribute('cellspacing', '0');
        ChessTable.setAttribute('class', 'table');
        //put second div inside div in html 
        document.getElementsByTagName('div')[0].appendChild(div2);

        div.setAttribute('class', 'sideDiv');
        div2.setAttribute('class', 'tableDiv');
