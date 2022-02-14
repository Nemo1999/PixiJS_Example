const app = new PIXI.Application({width:800, height:600,backgroundColor: 0xEDBF98});
document.body.appendChild(app.view);
console.log("index.js loaded")
app.loader
    .add('p1','./SpriteSheet/Sprite_Sheet.json')
    .pre((loader)=>{console.log("start loading spritesheet from "+ loader.baseUrl)})
    .load(onAssetsLoaded);

const boat = PIXI.Sprite.from("Assets/boat.png")
app.stage.addChild(boat)

function onAssetsLoaded(loader, res) {
  console.log("spritesheet loading complete")
  let t = res.p1.textures["boat"]
  console.log(t)
  app.stage.addChild(t)
}
