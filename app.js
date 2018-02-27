function operate(op, n1, n2) {
  return eval(`${n1} ${op} ${n2}`);
}

var buttonLabels = ['+-', 'C', '<-', '/',
                    '7',  '8',  '9', 'X', 
                    '4',  '5',  '6', '-',
                    '1',  '2',  '3', '+',
                    '',   '0',  '.', '='];

for (let i = 0; i < 20; i++ ) {
  let button = document.createElement('button');
  button.setAttribute('class', 'button');
  button.innerHTML = buttonLabels[i];
  document.getElementById('container').appendChild(button);
}