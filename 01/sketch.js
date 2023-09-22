function setup() {
  createCanvas(800, 400);
  background(180);

  fill('black');
  text("1.", 20, 15);
  text("2.", 20, 105);
  text("3.", 80, 105);
  text("4.", 80, 205);
  text("5.", 540, 20);
  text("6.", 350, 105);
  text("7.", 625, 105);

  for(let i = 0; i < 10; i++)
  {
    strokeWeight(1);
    fill('white');
    if(i == 6)
    {
      fill('blue');
    }
    square(20 + 50 * i, 20, 50);
  }

  for(let i = 0; i < 5; i++)
  {
    fill(0 + 50 * i);
    square(20, 110 + 50 * i, 50);
  }

  for(let i = 0; i < 4; i++)
  {
    let x = 0;
    switch(i) 
    {
      case 1:
        x = 25;
        break;
      case 2:
        x = 75;
        break;
      case 3:
        x = 150;
        break;
    }
    fill(0, 0 + 75 * i, 0);
    rect(80 + x, 110, 25 + 25 * i, 50);
  }

  for(let i = 0; i < 4; i++)
  {
    let x = 0;
    switch(i) 
    {
      case 1:
        x = 25;
        break;
      case 2:
        x = 75;
        break;
      case 3:
        x = 150;
        break;
    }

    fill(0, 0, 230 - 75 * i);
    rect(80 + x, 210, 25 + 25 * i, 50 + 25 * i);
  }

  for(let i = 0; i < 5; i++)
  {
    fill('white');
    strokeWeight(0 + 3 * i);
    circle(560 + 50 * i, 45, 25);
  }
  let changeColor = false;

  for(let i = 10; i > 0; i--)
  {
    if(changeColor == false)
    {
      fill('red');
    }
    else
    {
      fill('white');
    }
    changeColor = !changeColor;

    strokeWeight(1);
    circle(490, 220, 25 + 20 * i);
  }

  for(let i = 0; i < 21; i++)
  {
    let order = [];
    let orderReversed = [];

    if(changeColor == false)
    {
      fill('grey');
    }
    else 
    {
      fill('white');
    }

    changeColor = !changeColor;

    if(i < 10)
    {
      order[i] = 25 + 10 * i;
    }
    else 
    {
      orderReversed[i] = 225 - 10 * i;
      console.log(orderReversed);
    }

    if(i < 10)
    {
      rect(625, 110 + 10 * i, order[i], 10);
    }
    else 
    {
      rect(625, 110 + 10 * i, orderReversed[i], 10);

    }
  }
}
