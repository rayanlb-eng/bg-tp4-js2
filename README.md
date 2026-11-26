# ⚙️ TP4 (part 2) – JavaScript : Manipulation du DOM et mini-application CRUD

## 🎯 Objectif du TP
L’objectif de ce TP est de vous familiariser avec les **méthodes et propriétés JavaScript** utilisées pour la **manipulation du DOM**.  
Vous allez mettre en pratique ces notions à travers la réalisation d’une **mini-application “CRUD-Persons”**, décomposée en **6 étapes progressives**.

---

## 📘 Ressources fournies
- Le fichier **`TP4_JS.pdf`** vous guide **étape par étape** dans la réalisation du TP.  
- Tous les **scripts JavaScript** doivent être écrits dans un **fichier externe** nommé **`script.js`**.  
- Chaque script doit commencer par :
  ```js
  "use strict";
  ```
- Votre code doit impérativement être **commenté**, en mentionnant pour chaque concept utilisé le **numéro de la diapositive** du cours.  
  > Exemple : `// Ici on utilise une boucle (slide 45)`

🛑 **Un code sans commentaire est automatiquement rejeté.**  
---

## 🧭 Déroulement du TP

1. **Accès à l’énoncé**
   - L’énoncé complet du TP est déposé sur **GitHub**.
   - Le lien de l’assignement est communiqué sur **Google Classroom**.

2. **Création de votre espace de travail**
   - Acceptez l’assignement sur **GitHub Classroom**.
   - Clonez ensuite votre dépôt individuel sur votre machine.

3. **Réalisation**
   - Chaque étape correspond à un **dossier distinct** : `etape1`, `etape2`, …, `etape6`.
   - Dans chaque dossier, complétez les fichiers **`index.html`** et **`script.js`** selon les consignes du PDF.
   - Certaines étapes peuvent aussi inclure un fichier **`style.css`** à compléter quand demandé.
   - La **dernière étape** du TP consiste à rajouter 3 fonctionnalités supplémentaires de votre choix.

4. **Soumission**
   - Une fois le travail terminé, exécutez :
     ```bash
     git add .
     git commit -m "TP5 CRUD-Persons terminé"
     git push origin main
     ```

---

## 🧾 Livrables attendus
- **6 dossiers** correspondant aux **6 étapes du TP**.  
- Dans chaque dossier doivent se trouver :
  - `index.html`  
  - (`script.js` et `style.css` lorsqu’ils sont demandés)

---

## ✅ Critères d’évaluation
- Le code est **fonctionnel** (sans erreur dans la console).  
- Les **commentaires** sont présents et référencent les slides.  
- Respect des **bonnes pratiques** : `"use strict"`, nommage, indentation.  
- Les modifications du DOM correspondent bien aux opérations sur le tableau `persons` (cohérence UI ↔ données).

---

## 🧠 Rappel avant soumission
- Vérifiez l’exécution dans la console du navigateur.  
- Ne laissez pas de `console.log()` de debug inutiles (ou commentez-les). 
- Les fonctionnalités de gestion des personnes (ajout, modification, suppression, lecture, mise à jour du résumé) doivent être opérationnelles à l'étape 6.

---

## 📎 Lien d’assignement
Le lien GitHub Classroom est disponible sur **Google Classroom**.

---

## Étape 7 — Observation du flux réseau

Ouvrir `etape6/index.html` dans Chrome via un serveur HTTP local, puis ouvrir les outils de développement avec **F12**. Dans **Réseau** (*Network*), cocher **Désactiver le cache** et actualiser la page. Sélectionner `script.js` et ouvrir **Aperçu** (*Preview*). L’onglet **Réponse** (*Response*) affiche aussi le texte du script.

Lors de la vérification, Chrome a reçu `index.html`, `style.css` et `script.js` avec le statut **200 OK**. La réponse de `script.js` contient le code source complet.

Le navigateur doit recevoir le JavaScript pour l’exécuter. Toute personne qui charge la page peut donc lire ce code et récupérer les mots de passe ou clés secrètes qui y seraient écrits. Ces secrets doivent rester sur le serveur, qui les utilise pour effectuer les opérations nécessaires et renvoie au navigateur les données dont la page a besoin.
