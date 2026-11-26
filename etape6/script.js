"use strict";

// Variables, tableaux/objets, fonctions et événements (slides 38–40, 45–47, 50–54).
// Sélecteurs, méthodes DOM, conditions et boucles (slides 42, 44, 61–64, 76–78, 85–91, 99–101).
let lignes = 0;
let total_points = 0;

const persons = [];
function doInsertRowTable(num, nom, prenom, points) {
  const table = document.getElementById("table_body");
  const row = table.insertRow(-1);

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
  col5.className = "chkbox";
  col5.innerHTML = '<input type="checkbox">';
}
function doInsert(nom, prenom, points) {
  total_points += points;
  lignes++;
  let num = lignes;
  doInsertRowTable(num, nom, prenom, points);
  update_summary();
}

function init() {
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
function doNewData() {
  const elt_nom = document.getElementById("form_nom");
  const elt_prenom = document.getElementById("form_prenom");
  const elt_points = document.getElementById("form_points");
  const nom = elt_nom.value.trim();
  const prenom = elt_prenom.value.trim();
  const pointsValue = elt_points.value;
  if (
    nom === "" ||
    prenom === "" ||
    pointsValue === "" ||
    Number.isNaN(Number(pointsValue))
  ) {
    alert("Formulaire incomplet !");
  } else {
    const points = parseInt(pointsValue);
    doInsert(nom, prenom, points);
    persons.push({
      nom: nom,
      prenom: prenom,
      points: points,
    });
    elt_nom.value = "";
    elt_prenom.value = "";
    elt_points.value = "";
  }
}
function deleteRow() {
  if (lignes === 0) {
    alert("Le tableau est vide !");
    return;
  }
  const table = document.getElementById("table_body");
  const checkboxes = table.querySelectorAll(".chkbox input[type='checkbox']");
  let selected = false;
  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      selected = true;
      break;
    }
  }
  if (!selected) {
    alert("Sélectionnez au moins une ligne !");
    return;
  }
  if (!confirm("Voulez-vous supprimer les lignes sélectionnées ?")) {
    return;
  }
  const rows = table.querySelectorAll("tr");
  for (let i = rows.length - 1; i >= 0; i--) {
    const checkbox = rows[i].querySelector(".chkbox input");
    if (checkbox.checked) {
      const points = parseInt(rows[i].cells[3].textContent);

      total_points -= points;
      lignes--;
      rows[i].remove();
      persons.splice(i, 1);
    }
  }
  update_summary();

  alert("Suppression effectuée avec succès !");
}


