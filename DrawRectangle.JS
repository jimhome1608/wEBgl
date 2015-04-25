//DrawRectangle.js
function main() { 
    var canvas = document.getElementById('example'); 
    if (! canvas) { 
        console.log(' Failed to retrieve the < canvas > element'); 
        return; 
    } 
    var ctx = canvas.getContext('2d'); 
    ctx.fillStyle = 'rgba( 0, 0, 255, 0.5)'; // Set a blue color 
    ctx.beginPath();
    ctx.arc(10,10,5,0,360,false);
    ctx.closePath()
    //ctx.fillRect( 120, 10, 150, 150); // Fill a rectangle with the color 
}
