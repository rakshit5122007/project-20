var tom,
var jerry,



function preload() {
gardenok.loadImage("garden.png")
tom_walking.loadAnimation("tomTwo.png","tomThree.png",)
tom_sitting.loadImage("tomOne.png")
jerry_ok.loadAnimation("jerryThree.png","jerryTwo.png")
jerry_standing.loadImage("jerryFour.png")

}

function setup(){
    createCanvas(200,800);
   cat = createSprite(100,500,10,10)
   cat.addImage("tom_sitting")

   jerry = createSprite(100,100,10,10)
   jerry.addImage("jerry_standing")
    
   garden  = createSprite(50,400) 
   garden.addImage("gardenok")


}

function draw() {

    background(255);
    

   drawSprites();
   



}



function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5
        cat.addAnimation("tom_Walking",tom)
        cat.changeAnimation("tom_Walking")

        jerry.addAnimation("jerry_ok",mouse)
        jerry.changeAmination("jery_ok")


    
    }

  


}
