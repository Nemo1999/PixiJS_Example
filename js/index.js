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
  console.log(loader, res)
  // app.stage.addChild(t)
}
