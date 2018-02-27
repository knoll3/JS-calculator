function operate(op, n1, n2) {
  return eval(`${n1} ${op} ${n2}`);
}

document.getElementById('container').innerHTML = operate('+', 5, 3);