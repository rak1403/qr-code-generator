# QR Code Generator

A **frontend-only** web application that allows users to generate and download QR codes instantly. The app uses the open-source [`qrcodejs`](https://github.com/davidshimjs/qrcodejs) library and requires no backend or API keys.

---

## 🔗 Live Demo

You can view a live demo here: *[GitHub Pages URL goes here](https://rak1403.github.io/qr-code-generator/)*

---

## 📂 Project Structure

```
qr-code-generator/
├── index.html       # Main HTML page
├── style.css        # Dark-mode styles and layout
├── script.js        # QR generation & download logic
└── icon.png      # (Optional) Favicon for the site
```

---

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/rak1403/qr-code-generator.git
   cd qr-code-generator
   ```

2. **Open `index.html`**

   * Simply double-click the `index.html` file, or
   * Serve it via a simple HTTP server:

     ```bash
     npx http-server .   # requires Node.js
     ```

3. **Start generating QR codes!**

   * Type your text or URL into the input box.
   * Click **Generate QR**.
   * Click **Download QR Code** to save it as a PNG.

---

## ⚙️ Features

* **Generate QR Codes**: Encode any text or URL.
* **Download as PNG**: Save the generated QR code.
* **Dark Mode**: Sleek, minimal dark theme.
---

