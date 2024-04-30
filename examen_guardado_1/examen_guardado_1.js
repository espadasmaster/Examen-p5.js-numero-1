

let pxe = 200; 
let pye = 100; 
let dxe = 100; 
let dye = 200;

let g = true; 
let h = true; 
let a = true; 
let b = true;

var xSpeed = (2, 7); 
var ySpeed = (-7, -2);

let circleColor; 
let circleColortwo;

function setup() { 
createCanvas(600, 600); 
circleColor = color(255, 0, 0); 
circleColortwo = color(0, 0, 255); }

function draw() {
background(150);  
fill(circleColor); 
ellipse(pxe,pye,40,40); 
fill(circleColortwo);  
ellipse(dxe, dye, 40, 40);   

// circulo uno   
if (g == true){  
  pxe = pxe + 4;  
if(pxe == 580){ 
      g=false;   }  
    }    
if (g == false){  
pxe = pxe - 4;  
if(pxe == 20){  
g = true;   }   
}

if (h == true){ 
pye = pye + 4;  
if(pye == 580){ 
h=false;     
    }  
}     
if (h == false){  
pye = pye - 4;  
if(pye == 20){  
h = true;   }  
}   

//circulo dos  
if (a == true){  
dxe = dxe + 2;  
if(dxe == 580){  
a = false;   }  
}      
if (a == false){ 
dxe = dxe - 2;  
if(dxe == 20){  
a = true;   } 
}     
if (b == true){  
dye = dye + 2;  
if(dye == 580){  
b = false;     

}

} 

if (b == false){
dye = dye - 2;  
if(dye == 20){  
b = true;   }   
}      
//rebote con el techo y cambio de tono del circulo rojo
 if (pye >= height - 20 || pye <= 20) {
    ySpeed *= -1; // Invertir dirección en el eje Y
    circleColor = color(255, random(100, 200), random(100, 200)); // Cambiar a tonos de rojo al colisionar con el techo
  }
  
  //rebote con el piso y cambio de tono del circulo azul
  if (dye > height - 23){
  ySpeed *= -1;
  circleColortwo = color(random(100, 200), random(100, 200), 255);//lo mismo pero al colisionar con el piso
  }

}
