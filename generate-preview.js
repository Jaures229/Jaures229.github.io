const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

// Dimensions standards Open Graph
const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const context = canvas.getContext('2d');

// 1. Fond Cyberpunk / HUD
context.fillStyle = '#0f172a';
context.fillRect(0, 0, width, height);

// 2. Ajout de texte dynamique
context.font = 'bold 45pt "Courier New"'; // Utilise une police de type console
context.fillStyle = '#e91e63'; 
context.fillText('JAURÈS AGOSSOU', 80, 150);

context.font = '25pt "Courier New"';
context.fillStyle = '#ffffff';
context.fillText('> GAMEPLAY PROGRAMMER_', 80, 220);

context.fillStyle = '#61dafb';
context.fillText('Unity / C++ / ECS / Netcode', 80, 290);

// 3. Sauvegarde de l'image directement dans le dossier public
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('./public/og-preview.jpg', buffer);
console.log('🖼️ Image d\'aperçu dynamique générée avec succès !');
