makeCalculator();

$(document).keydown(function(e) {
  if (isKeyAllowed(e.key)) {
    if (e.key == 'Enter') {
      onButtonPress('=');
    } else if (e.key == 'Delete') {
      onButtonPress('C');
    } else if (e.key == 'Backspace') {
      onButtonPress('<-');
    } else {
      onButtonPress(e.key);  
    }
  }
});


// Function Definitions //

function makeCalculator() {
  var buttonLabels = genButtonLabels();
  result = '';
  resultSave = '';
  for (let i = 0; i < 20; i++ ) {
    let button = document.createElement('button');
    button.setAttribute('class', 'button');
    button.innerHTML = buttonLabels[i];
    button.id = `button_${buttonLabels[i]}`;
    document.getElementById('keypad').appendChild(button);
    button.addEventListener('click', function() {
      onButtonPress(buttonLabels[i]);
    }); 
    document.getElementById('calculatorDisplay').innerHTML = 0;
  }
}

function isKeyAllowed(key) {
  var allowed = false;
  var allowableKeys = ['1', '2', '3', '4', '5', '6', '7',
                       '8', '9', '0', '.', 'Delete', 'Backspace', 
                       '/', '*', '-', '+', 'Enter'];
  for (let i = 0; i < allowableKeys.length; i++) {
    if (key == allowableKeys[i]) {
      allowed = true;
    }
  }                     
  return allowed;
}

function sigFigures(number, figures) {
  return Math.round(number * 10 ** figures) / 10 ** figures;
}

function genButtonLabels() {
  return ['C',  '',  '<-', '/',
          '7',  '8',  '9', '*', 
          '4',  '5',  '6', '-',
          '1',  '2',  '3', '+',
          '',   '0',  '.', '='];

}

function onButtonPress(button) {
  let buttonCondition = resultSave !== '' && 
                        (button == '+' || button == '-' || 
                         button == '*' || button == '/');  
                         
  // Clear
  if (button == 'C') {
    result = '';
    resultSave = '';

  // Equals
  } else if (button == '=') {
    result = eval(result)
    result = sigFigures(result, 12);
    resultSave = result;
    document.getElementById('calculatorDisplay').innerHTML = result;
    result = '';
    return;

  // Backspace
  } else if (button == '<-') {
    result = String(result).substring(0, result.length - 1);
    resultSave = '';

  // Everything else
  } else {
    if (buttonCondition) {
      result = resultSave;
      resultSave = '';
    } else {
      resultSave = '';
    }
    result += button;
  }

  // Display the results
  document.getElementById('calculatorDisplay').innerHTML = result;
  console.log(result.length);

  // Special Cases
  if (result == '') {
    document.getElementById('calculatorDisplay').innerHTML = 0;
  }
}
