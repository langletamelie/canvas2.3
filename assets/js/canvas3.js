var cvs =  document.getElementById('biscuit');
var ctx = cvs.getContext('2d');
// Visage
ctx.beginPath();
ctx.arc(200,75,75,0,Math.PI*2,true);
ctx.fillStyle = '#976F0F';
ctx.fill();
ctx.closePath();
// yeux
ctx.beginPath();
ctx.arc(170,65,15,0,Math.PI*2,true);
ctx.arc(230,65,15,0,Math.PI*2,true);
ctx.fillStyle = 'white';
ctx.fill();
ctx.closePath();
//sourcils
ctx.beginPath();
ctx.lineWidth='3';
ctx.strokeStyle='white';
ctx.moveTo(155,40);
ctx.quadraticCurveTo(170,25,185,40);
ctx.moveTo(215,40);
ctx.quadraticCurveTo(230,25,245,40);
ctx.stroke();
ctx.closePath();
//bouche
ctx.beginPath();
ctx.lineWidth='3';
ctx.strokeStyle='red';
ctx.moveTo(160,100);
ctx.quadraticCurveTo(200,115,240,100);
ctx.moveTo(160,100);
ctx.quadraticCurveTo(200,140,240,100);
ctx.stroke();
ctx.closePath();
//tronc
ctx.beginPath();
ctx.moveTo(200,150);
ctx.lineTo(200,330);
ctx.lineWidth = 130;
ctx.strokeStyle = '#976F0F';
ctx.stroke();
ctx.closePath();
//bras du bonhomme//
ctx.beginPath();
ctx.moveTo(50,150);
ctx.lineTo(350,150);
ctx.lineWidth = 50;
ctx.strokeStyle = '#976F0F';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.stroke();
ctx.closePath();
//jambes
ctx.beginPath();
ctx.moveTo(165,250);
ctx.lineTo(165,370);
ctx.moveTo(235,250);
ctx.lineTo(235,370);
ctx.lineWidth = 60;
ctx.strokeStyle = '#976F0F';
ctx.stroke();
ctx.closePath();
//entrejambe
ctx.beginPath();
ctx.moveTo(200,330);
ctx.lineTo(200,400);
ctx.lineWidth = 20;
ctx.strokeStyle = 'white';
ctx.stroke();
ctx.closePath();
//boutons
ctx.beginPath();
ctx.arc(200,190,15,0,Math.PI*2,true);
ctx.arc(200,250,15,0,Math.PI*2,true);
ctx.fillStyle = 'purple';
ctx.fill();
ctx.closePath();
