var sheet, data
var resource, boat
const app = new PIXI.Application({width:800, height:600,backgroundColor: 0xEDBF98});
document.body.appendChild(app.view);
console.log("index.js loaded")
PIXI.Loader.shared
    .add('p1', 'Spritesheet/sprite.json')
    .load(onAssetsLoaded);

//const boat = PIXI.Sprite.from("Assets/boat.png")
//app.stage.addChild(boat)

function onAssetsLoaded(loader, res) {
  console.log("spritesheet loading complete")
  //console.log(loader, res)
  sheet = loader.resources.p1.spritesheet
  data = loader.resources.p1.data
  
  boat = new PIXI.Sprite(sheet.textures["boat.png"])
  boat.x = app.screen.width - boat.width
  boat.y = app.screen.height / 3
  boat.width *= 0.3
  boat.height *= 0.3
  //boat.scale = (1,1)

  
  let walkingFrameNames = data.animations.greenCatWalk
  let walkingTextures = []
  
  var texture
  var duration
  for(i=0;i<walkingFrameNames.length;i++){
    texture = new PIXI.Texture.from(walkingFrameNames[i])
    //texture = sheet.textures[walkingFrameNames[i]];
    walkingTextures.push(texture);
  }
  
  const walk = new PIXI.AnimatedSprite(walkingTextures);



  //const walk = new PIXI.AnimatedSprite(sheet.animations.greenCatWalk);
  walk.x = 0
  walk.y = app.screen.height - walk.height
  walk.animationSpeed = 0.2
  walk.onLoop = function(){
    walk.x += walk.width * 0.26
  }
  walk.play()
  
  //boat = new PIXI.Sprite(res.p1.textures["boat.png"])  
  app.stage.addChild(boat);
  app.stage.addChild(walk);
  
  app.start()
  // app.stage.addChild(t)
}
