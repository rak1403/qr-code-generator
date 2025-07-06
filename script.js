function generateQR() {
  const qrContainer = document.getElementById('qrcode');
  const input = document.getElementById('qrInput').value.trim();

  qrContainer.innerHTML = '';

  if (input === '') {
    alert('Please enter some text or a URL!');
    return;
  }

  new QRCode(qrContainer, {
    text: input,
    width: 200,
    height: 200
  });
}

function downloadQR() {
  const qrContainer = document.getElementById('qrcode');
  const img = qrContainer.querySelector('img');

  if (!img) {
    alert('Please generate a QR code first!');
    return;
  }

  const link = document.createElement('a');
  link.href = img.src;
  link.download = 'qr-code.png';
  link.click();
}

