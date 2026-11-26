"use strict";

// Variables, calculs, tableaux et boucle (slides 38–41, 44, 50–51); fonctions et DOM (slides 45–47, 61–64, 85–91).
let lignes = 0;
let total_points = 0;

const persons = [
    {
        nom: "nom-1",
        prenom: "prenom-1",
        points: 5
    },
    {
        nom: "nom-2",
        prenom: "prenom-2",
        points: 10
    },
    {
        nom: "nom-3",
        prenom: "prenom-3",
        points: 15
    }
];
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
function doInsert(nom, prenom, points) {
    total_points += points;
    lignes++;
    let num = lignes;
    doInsertRowTable(num, nom, prenom, points);
    update_summary();
}

function init(){
   for (const person of persons) {
        doInsert(person.nom, person.prenom, person.points);
    }
}
init();

function consoleTableau() {
    console.table(persons);
}
function update_summary() {
    const element_lignes = document.getElementById("p1");
    const element_points = document.getElementById("p3");
    element_lignes.innerText = lignes + " ligne(s)";
    element_points.innerText = "Total point(s)= " + total_points;
}


