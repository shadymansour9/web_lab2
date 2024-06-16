// Common row
const addRow = (container, content) => {
  const row = `<div class='row'>${content}</div>`;
  container.insertAdjacentHTML('beforeend', row);
}

// Monitor row
const addMonitor = (container, text) => {
  const t = text ?? '';
  const monitor = `<div id='monitor'>${t}</div>`;
  addRow(container, monitor);
}

// Button
const button = (text) => {
  const c = text === 'calculate' ? 'wide' : '';
  return `<div class='d-btn ${c}'>${text}</div>`;
}

// Buttons
const addButtons = (container, nums) => {
  const closingDiv = '<div style="clear:both"></div>';
  const btnHTML = nums.map((n) => button(n)).join('') + closingDiv;
  addRow(container, btnHTML);
}

// Button actions
const click = (event) => {
  const monitor = document.getElementById('monitor');
  const bac = monitor.innerText.trim();
  const a = event.target.innerText;
  if (a === 'clear') {
    monitor.innerText = '';
  } else if (a === 'calculate') {
    try {
      monitor.innerText = eval(bac);
    } catch {
      monitor.innerText = 'Error';
    }
  } else {
    monitor.innerText += a;
  }
}

// Render all
const render = (container, labels) => {
  addMonitor(container);
  addButtons(container, labels);
  document.querySelectorAll('.d-btn').forEach(el => el.addEventListener('click', click));
}

// Create
const calcContainer = document.getElementById('app');
const buttonLabels = [
  'MC', 'MR', 'M+', 'M-', 'MS', 
  '2nd', 'pi', 'e', 'C', 'del', 
  'x^2', '1/x', '|x|', 'exp', 'mod', 
  'x^1/2', '(', ')', 'n!', '/', 
  'x^y', '7', '8', '9', '*', 
  '10^', '4', '5', '6', '-', 
  'log', '1', '2', '3', '+', 
  'ln', '+/-', '0', '.', 'calculate', 
  'clear'
];
render(calcContainer, buttonLabels);
