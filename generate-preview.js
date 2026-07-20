const { createCanvas } = require('@napi-rs/canvas');
const fs = require('fs');

// Dimensions standards Open Graph
const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const context = canvas.getContext('2d');

// 1. Fond bleu sombre profond (Style HUD)
context.fillStyle = '#060b14'; 
context.fillRect(0, 0, width, height);

// 2. Grille de fond subtile (Cyan très discret)
context.strokeStyle = 'rgba(97, 218, 251, 0.02)';
context.lineWidth = 1;
const gridSize = 40;
for (let x = 0; x < width; x += gridSize) {
    context.beginPath(); context.moveTo(x, 0); context.lineTo(x, height); context.stroke();
}
for (let y = 0; y < height; y += gridSize) {
    context.beginPath(); context.moveTo(0, y); context.lineTo(width, y); context.stroke();
}

// 3. Bordures et Crochets HUD en JAUNE
context.strokeStyle = '#ffcc00'; 
context.lineWidth = 4;
const b = 40; 
const len = 30; 
// Haut-Gauche
context.beginPath(); context.moveTo(b, b + len); context.lineTo(b, b); context.lineTo(b + len, b); context.stroke();
// Haut-Droite
context.beginPath(); context.moveTo(width - b, b + len); context.lineTo(width - b, b); context.lineTo(width - b - len, b); context.stroke();
// Bas-Gauche
context.beginPath(); context.moveTo(b, height - b - len); context.lineTo(b, height - b); context.lineTo(b + len, height - b); context.stroke();
// Bas-Droite
context.beginPath(); context.moveTo(width - b, height - b - len); context.lineTo(width - b, height - b); context.lineTo(width - b - len, height - b); context.stroke();

// Ligne horizontale de séparation sous les titres (Jaune avec opacité)
context.strokeStyle = 'rgba(255, 204, 0, 0.2)';
context.lineWidth = 2;
context.beginPath(); context.moveTo(b, 340); context.lineTo(width - b, 340); context.stroke();

// 4. TEXTES PRINCIPAUX
// Prénom & Nom en BLANC (avec lueur)
context.shadowBlur = 10;
context.shadowColor = '#ffffff';
context.font = 'bold 52pt "Courier New"';
context.fillStyle = '#ffffff';
context.fillText('JAURÈS AGOSSOU', 90, 160);

// Reset de la lueur
context.shadowBlur = 0;

// 5. ZONE COMPTEUR RPG (LVL, HP, MP)
const rpgX = 90;
const rpgY = 210;

// Texte du niveau et rôle
context.font = '22pt "Courier New"';
context.fillStyle = 'rgba(255, 255, 255, 0.7)';
context.fillText('LVL 19 - GAMEPLAY PROGRAMMER', rpgX, rpgY);

// --- BARRES DE STATUT ---
const barWidth = 100;
const barHeight = 18;

// Jauge HP (Rouge)
context.fillStyle = '#ff4d4d'; // Fond de la barre HP active
context.fillRect(rpgX, rpgY + 15, barWidth, barHeight);
context.fillStyle = '#551a1a'; // Ombre de la barre vide
context.fillRect(rpgX + barWidth, rpgY + 15, 30, barHeight); // Reste vide
// Texte HP
context.font = 'bold 16pt "Courier New"';
context.fillStyle = 'rgba(255, 255, 255, 0.8)';
context.fillText('HP', rpgX + barWidth + 40, rpgY + 31);

// Jauge MP (Bleue)
const mpX = rpgX + 220; // Décalage vers la droite
context.fillStyle = '#3a86ff'; // Fond de la barre MP active
context.fillRect(mpX, rpgY + 15, barWidth - 20, barHeight); // Légèrement entamée
context.fillStyle = '#12264a'; // Ombre de la barre vide
context.fillRect(mpX + (barWidth - 20), rpgY + 15, 50, barHeight);
// Texte MP
context.font = 'bold 16pt "Courier New"';
context.fillStyle = 'rgba(255, 255, 255, 0.8)';
context.fillText('MP', mpX + barWidth + 40, rpgY + 31);


// 6. SPÉCIALISATIONS (Style logs système)
context.font = '20pt "Courier New"';
context.fillStyle = '#ffcc00'; // Sous-titre jaune
context.fillText('> CORE SYSTEMS & LOGIC_', 90, 410);

context.font = '18pt "Courier New"';
context.fillStyle = '#61dafb'; // Bleu cyan
context.fillText('[SYSTEMS] Unity / C++ / ECS', 90, 460);

// Indicateur en bas à droite
context.font = '14pt "Courier New"';
context.fillStyle = 'rgba(255, 204, 0, 0.5)';
context.fillText('SYS.STATUS: ONLINE', width - 260, height - 70);

// 7. Sauvegarde finale en JPEG
const buffer = canvas.toBuffer('image/jpeg');
fs.writeFileSync('./public/og-preview.jpg', buffer);

console.log('⚔️  Image d\'aperçu HUD avec barres HP/MP générée avec succès !');
