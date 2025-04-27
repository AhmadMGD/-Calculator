// Show the active calculator and update tab styling
function showCalculator(id) {
  // Hide all calculator sections
  const calculatorSections = document.querySelectorAll('.calculator-section');
  calculatorSections.forEach(section => {
    section.classList.add('hidden');
  });
  
  // Show the selected calculator
  document.getElementById(id).classList.remove('hidden');
  
  // Update active tab
  const tabs = document.querySelectorAll('.calculator-tab');
  tabs.forEach(tab => {
    tab.classList.remove('active-tab');
  });
  
  // Set the clicked tab as active
  event.currentTarget.classList.add('active-tab');
}

// Format number to currency
function formatCurrency(number) {
  return number.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

// Percentage Calculator Functions
function calculateStandard() {
  const number = parseFloat(document.getElementById('standardNumber').value) || 0;
  const percentage = parseFloat(document.getElementById('standardPercentage').value) || 0;
  
  if (number === 0 || percentage === 0) {
    return;
  }
  
  const result = (number * percentage) / 100;
  document.getElementById('standardResultValue').textContent = formatCurrency(result);
  document.getElementById('standardResult').classList.remove('hidden');
}

function resetStandard() {
  document.getElementById('standardNumber').value = '';
  document.getElementById('standardPercentage').value = '';
  document.getElementById('standardResult').classList.add('hidden');
}

function calculateXOfY() {
  const x = parseFloat(document.getElementById('xPercentage').value) || 0;
  const y = parseFloat(document.getElementById('yNumber').value) || 0;
  
  if (x === 0 || y === 0) {
    return;
  }
  
  const result = (x * y) / 100;
  document.getElementById('xOfYResultValue').textContent = formatCurrency(result);
  document.getElementById('xOfYResult').classList.remove('hidden');
}

function resetXOfY() {
  document.getElementById('xPercentage').value = '';
  document.getElementById('yNumber').value = '';
  document.getElementById('xOfYResult').classList.add('hidden');
}

function calculateWhatPercent() {
  const x = parseFloat(document.getElementById('whatX').value) || 0;
  const y = parseFloat(document.getElementById('whatY').value) || 0;
  
  if (x === 0 || y === 0) {
    return;
  }
  
  const result = (x / y) * 100;
  document.getElementById('whatPercentResultValue').textContent = formatCurrency(result) + '%';
  document.getElementById('whatPercentResult').classList.remove('hidden');
}

function resetWhatPercent() {
  document.getElementById('whatX').value = '';
  document.getElementById('whatY').value = '';
  document.getElementById('whatPercentResult').classList.add('hidden');
}

// GST Calculator Functions
function calculateAddGst() {
  const amount = parseFloat(document.getElementById('addAmount').value) || 0;
  const gstPercentage = parseFloat(document.getElementById('addGstPercentage').value) || 0;
  
  if (amount === 0 || gstPercentage === 0) {
    return;
  }
  
  const gstAmount = (amount * gstPercentage) / 100;
  const finalAmount = amount + gstAmount;
  
  document.getElementById('addGstAmount').textContent = '$' + formatCurrency(gstAmount);
  document.getElementById('addFinalAmount').textContent = '$' + formatCurrency(finalAmount);
  document.getElementById('addGstFormula').textContent = 
    `$${formatCurrency(amount)} + $${formatCurrency(gstAmount)} (${gstPercentage}% GST) = $${formatCurrency(finalAmount)}`;
  
  document.getElementById('addGstResults').classList.remove('hidden');
}

function resetAddGst() {
  document.getElementById('addAmount').value = '';
  document.getElementById('addGstPercentage').value = '10';
  document.getElementById('addGstResults').classList.add('hidden');
}

function calculateRemoveGst() {
  const amount = parseFloat(document.getElementById('removeAmount').value) || 0;
  const gstPercentage = parseFloat(document.getElementById('removeGstPercentage').value) || 0;
  
  if (amount === 0 || gstPercentage === 0) {
    return;
  }
  
  const gstAmount = amount - (amount * 100) / (100 + gstPercentage);
  const finalAmount = amount - gstAmount;
  
  document.getElementById('removeGstAmount').textContent = '$' + formatCurrency(gstAmount);
  document.getElementById('removeFinalAmount').textContent = '$' + formatCurrency(finalAmount);
  document.getElementById('removeGstFormula').textContent = 
    `$${formatCurrency(amount)} - $${formatCurrency(gstAmount)} (${gstPercentage}% GST) = $${formatCurrency(finalAmount)}`;
  
  document.getElementById('removeGstResults').classList.remove('hidden');
}

function resetRemoveGst() {
  document.getElementById('removeAmount').value = '';
  document.getElementById('removeGstPercentage').value = '10';
  document.getElementById('removeGstResults').classList.add('hidden');
}

// Profit/Loss Calculator Functions
function calculateProfitLoss() {
  const cp = parseFloat(document.getElementById('costPrice').value) || 0;
  const sp = parseFloat(document.getElementById('sellingPrice').value) || 0;
  
  if (cp === 0 || sp === 0) {
    return;
  }
  
  const difference = sp - cp;
  const isProfit = difference >= 0;
  const percentage = (Math.abs(difference) / cp) * 100;
  
  const resultElement = document.getElementById('profitLossResults');
  resultElement.classList.remove('hidden');
  
  // Update the labels and values
  document.getElementById('plAmountLabel').textContent = isProfit ? 'Profit Amount:' : 'Loss Amount:';
  document.getElementById('plPercentageLabel').textContent = isProfit ? 'Profit Percentage:' : 'Loss Percentage:';
  
  const amountElement = document.getElementById('plAmount');
  const percentageElement = document.getElementById('plPercentage');
  
  amountElement.textContent = '$' + formatCurrency(Math.abs(difference));
  percentageElement.textContent = formatCurrency(percentage) + '%';
  
  // Update styling based on profit or loss
  if (isProfit) {
    amountElement.className = 'text-xl font-bold text-green-600';
    percentageElement.className = 'text-xl font-bold text-green-600';
    resultElement.className = 'rounded-lg p-4 border animate-fade-in bg-green-50 border-green-200';
  } else {
    amountElement.className = 'text-xl font-bold text-red-600';
    percentageElement.className = 'text-xl font-bold text-red-600';
    resultElement.className = 'rounded-lg p-4 border animate-fade-in bg-red-50 border-red-200';
  }
  
  // Update formula text
  document.getElementById('plFormula').textContent = isProfit 
    ? `You made a profit of $${formatCurrency(Math.abs(difference))} (${formatCurrency(percentage)}% of your cost)`
    : `You incurred a loss of $${formatCurrency(Math.abs(difference))} (${formatCurrency(percentage)}% of your cost)`;
}

function resetProfitLoss() {
  document.getElementById('costPrice').value = '';
  document.getElementById('sellingPrice').value = '';
  document.getElementById('profitLossResults').classList.add('hidden');
}

// Initialize the default tab
document.addEventListener('DOMContentLoaded', function() {
  // Set first tab as active by default
  const firstTab = document.querySelector('.calculator-tab');
  if (firstTab) {
    firstTab.classList.add('active-tab');
  }
});