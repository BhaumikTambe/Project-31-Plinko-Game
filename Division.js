class Division {
    constructor(x, y, width, heigth) {
        var options = {
        isStatic: true
      }
    this.width = width;
    this.heigth = heigth;
    this.body = Bodies.rectangle(x, y, width, heigth, options);

    World.add(world, this.body);
}
display() {
    var pos = this.body.position;

    rectMode(CENTER);
    fill("white");
    rect(pos.x, pos.y, this.width, this.heigth);
  }
};