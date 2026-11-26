"use strict";

// Strict, fonctions et constantes (slides 45–47, 50–51); sélection et méthodes DOM (slides 61–64, 85–91).
function doInsertRowTable(num, nom, prenom, points) {
     const table = document.getElementById("table");
     const row =table.insertRow(-1);

    const col1 = row.insertCell(0);
    const col2 = row.insertCell(1);
    const col3 = row.insertCell(2);
    const col4 = row.insertCell(3);
    const col5 = row.insertCell(4);
    col1.textContent = num;
    col2.textContent = nom;
    col3.textContent = prenom;
    col4.textContent = points;

    col1.className = "number";
    col2.className = "text";
    col3.className = "text";
    col4.className = "number";
    col5.className = "chkbox"
    col5.innerHTML = '<input type="checkbox">';

}


