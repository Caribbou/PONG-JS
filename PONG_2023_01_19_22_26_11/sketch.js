let XBolinha = 300;
let YBolinha = 200;
let diametro = 20;
let velocidadeXBolinha = 8;
let velocidadeYBolinha = 8;
let raio = diametro/2;

let XRaquete = 5;
let YRaquete = 150;
let WidthRaquete = 10;
let HeightRaquete = 90;

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeDoOponente;

let meusPontos = 0;
let pontosOponente = 0;

let ponto;
let raquetada;
let trilha;


function preload(){
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound ("raquetada.mp3");
  trilha = loadSound ("trilha.mp3");
}

function setup() {
  createCanvas(600, 400);
 trilha.loop()
  
}

function draw() {
  background(0);
  MostraBolinha()
  MoveBolinha()
  RebateNaBorda()
  MinhaRaquete()
  moverRaquete()
  colisaoRaquete()
  raqueteOponente()
  colideRaqueteOponente()
  moveRaqueteOponente()
  marcaPonto()
  
  }

function MostraBolinha(){
circle (XBolinha, YBolinha, diametro)
}

function MoveBolinha(){
  XBolinha += velocidadeXBolinha
  YBolinha += velocidadeYBolinha
}

function RebateNaBorda(){
  
    if (XBolinha + raio> width ||
     XBolinha - raio < 0){
        velocidadeXBolinha *= -1
  }
    if (YBolinha + raio > height ||
     YBolinha - raio < 0){
        velocidadeYBolinha *= -1
  }
}
function MinhaRaquete(){
  rect(XRaquete, YRaquete, WidthRaquete, HeightRaquete )

}

function moverRaquete(){
  if (keyIsDown(UP_ARROW)){
    YRaquete -= 10
  }
  if (keyIsDown(DOWN_ARROW)){
    YRaquete += 10
  }
}
function colisaoRaquete(){
  if (XBolinha - raio < XRaquete + WidthRaquete&&
      YBolinha - raio < YRaquete + HeightRaquete&&
      YBolinha + raio > YRaquete ){
    velocidadeXBolinha *= -1
    raquetada.play()
  }
}
function raqueteOponente(){
  rect(xRaqueteOponente, yRaqueteOponente, WidthRaquete, HeightRaquete )
}

function colideRaqueteOponente(){
  if (XBolinha + diametro - 20 > xRaqueteOponente - WidthRaquete
  &&  YBolinha + raio < yRaqueteOponente + HeightRaquete
  &&  YBolinha + raio > yRaqueteOponente ){
    velocidadeXBolinha *= -1
  raquetada.play()
  }
}
function moveRaqueteOponente(){
   if (keyIsDown(87)){
    yRaqueteOponente -= 10
  }
  if (keyIsDown(83)){
    yRaqueteOponente += 10
}
}
function marcaPonto(){
  stroke(255)
  textAlign (CENTER);
  textSize (20);
  fill(color (245,154, 18))
  rect (125, 32, 50, 20)
  fill (255)
  text(meusPontos, 150, 50);
  fill(color (245,154, 18))
  rect (425, 32, 50, 20)
  fill (255)
  text(pontosOponente, 450, 50);
  if(XBolinha>590){
    meusPontos += 1
    ponto.play()
  }
  if(XBolinha < 10){
    pontosOponente += 1
    ponto.play()
  }
}
