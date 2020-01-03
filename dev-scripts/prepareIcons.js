const path = require('path');
const fs = require('fs');

// Chemin vers le sous dossier des icones
const directoryPath = path.join(__dirname, '../img');

// Chemin vers le fichier JS contenant notre tableau généré
const constantsPath = path.join(__dirname, '../constants.js');

// Créer un tableau de noms: myIcons
const myIcons = [];

fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    
    // Pour chaque fichier présent dans le dossier img
    files.forEach(function (file) {
        // Stocker le nom du fichier (sans l'extension) dans myIcons
        const fileNameWithoutExtension = file.split(".")[0];
        myIcons.push(fileNameWithoutExtension);
    });

    // Ecrire une variable myIcons égale à notre tableau dans le fichier `constants.js`
    // Constituer le code JS
    const codeJS = `const allowedIcons = ${ JSON.stringify(myIcons) };`;

    // Ecrire dans le fichier
    fs.writeFile(constantsPath, codeJS, function(err){
        if(err){
            return console.log('Unable to write file: ' + err);
        }
        console.log("Done !");
    });
});





// Pour chaque fichier présent dans le dossier img
    // Stocker le nom du fichier (sans l'extension) dans myIcons

