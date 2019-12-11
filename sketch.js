let s;
let scl = 20;
let food;
let question = ['3 + 2 =','5 + 6 =','2 + 8 =','3 + 4 =','2 + 4 =' ];

//let answers = ['5','11','10','7','6'];
function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();


}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
 food = createVector(floor(random(cols)), floor(random((rows))));
 // answers = createVector(floor(random(cols)), floor(random((rows))))
  // let answ = (random(food));
  //
  // text(answ, floor(random(cols)), floor(random((rows))));


	food.mult(scl);

  // let v = createVector(10.0, 20.0, 30.0);
  // let f = v.array();
  // print(f[0]); // Prints "10.0"
  // print(f[1]); // Prints "20.0"
  // print(f[2]); // Prints "30.0"
  }

  function draw() {
    background(51);

    if (s.eat(food)) {
      pickLocation();
    }

    s.death();
    s.update();
    s.show();



    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
    equa();

  }


  function keyPressed() {
    if (keyCode === UP_ARROW) {
      s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
      s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
      s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
      s.dir(-1, 0);
    }

  }
  function equa(){
    fill(220,55,10);
    for (var i = 0; i < question.length; i++) {
      question[i];
    }



  }
