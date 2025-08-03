const form = document.getElementById('qr-form');
const input = document.getElementById('text-input');
const qrContainer = document.getElementById('qr-container');
const clearBtn = document.getElementById('clear-btn');

let qrCode;

// Known app names (add more if needed)
const knownApps = [
  'whatsapp', 'facebook', 'instagram', 'youtube', 'snapchat',
  'twitter', 'linkedin', 'spotify', 'amazon', 'flipkart', 'telegram',
  'google', 'zoom', 'paytm', 'swiggy', 'zomato', 'ola', 'uber'
];

// Function to check if input is a valid URL
function isValidURL(str) {
  try {
    new URL(str);
    return true;
  } catch (e) {
    return false;
  }
}

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  const lowerText = text.toLowerCase();

  if (!text) {
    alert('Please enter a URL or app name');
    return;
  }

  const isApp = knownApps.includes(lowerText);
  const isURL = isValidURL(text);

  if (!isApp && !isURL) {
    alert('❌ Invalid input! Please enter a valid URL or a known app name.');
    return;
  }

  qrContainer.innerHTML = ''; // Clear old QR

  const size = Math.min(qrContainer.clientWidth, 300);

  qrCode = new QRCode(qrContainer, {
    text: text,
    width: size,
    height: size,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  });
});

// Clear button
clearBtn.addEventListener('click', () => {
  qrContainer.innerHTML = '';
  input.value = '';
});
