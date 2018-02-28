makeCalculator();

// Function Definitions //

function operate(op, n1, n2) {
  return eval(`${n1} ${op} ${n2}`);
}

function genButtonLabels() {
  return ['C',  '',  '<-', '/',
          '7',  '8',  '9', '*', 
          '4',  '5',  '6', '-',
          '1',  '2',  '3', '+',
          '',   '0',  '.', '='];

}

function makeCalculator() {
  var buttonLabels = genButtonLabels();
  result = '';
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
}

function onButtonPress(button) {
  if (button == 'C') {
    result = '';
  } else if (button == '=') {
    result = eval(result);
  } else if (button == '<-') {
    result = String(result).substring(0, result.length - 1);
  } else {
    result += button;
  }
  console.log(result);
  document.getElementById('bottomDisplay').innerHTML = result;
}

