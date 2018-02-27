function operate(op, n1, n2) {
  return eval(`${n1} ${op} ${n2}`);
}

var buttonLabels = ['+-', 'C', '<-', '/',
                    '7',  '8',  '9', 'X', 
                    '4',  '5',  '6', '-',
                    '1',  '2',  '3', '+',
                    '[]', '0',  '.', '='];
clear();

for (let i = 0; i < 20; i++ ) {
  let button = document.createElement('button');
  button.setAttribute('class', 'button');
  button.innerHTML = buttonLabels[i];
  button.id = `button_${buttonLabels[i]}`;
  document.getElementById('container').appendChild(button);
  button.addEventListener('click', function() {
    onButtonPress(buttonLabels[i]);
  }); 
}

function onButtonPress(button) {
  let output = document.getElementById('bottomDisplay');
  if (!isNaN(button)) {
    n = n * 10 + Number(button);
    var mathDisplay = n;
    console.log(`${button} -> ${n}`);
  } else if (button == '+' || button == '-') {
    a = n;
    r = operate(op, r, a)
    op = button;
    n = 0;
    var mathDisplay = r;
  } else if (button == '=') {
    a = n;
    r = operate(op, r, a)  
    n = 0;
    var mathDisplay = r;
    clear();
  } else if (button == 'C') {
    clear();
    mathDisplay = n;
  }
  output.innerHTML = mathDisplay;

}

function clear() {
  n = 0;
  a = 0
  op = '+';
  r = 0;
}