"use strict";

class CaesarCipher {
    constructor() {
        window.caesarCipher = this;
        this.initEventListeners();
      }

    applyCipher(text, shift, encode = true) {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            let char = text[i];

            if (char >= 'a' && char <= 'z') {
                const shiftAmount = encode ? shift : -shift;
                result += String.fromCharCode(((char.charCodeAt(0) - 97 + shiftAmount + 26) % 26) + 97);
            } else if (char >= 'A' && char <= 'Z') {
                const shiftAmount = encode ? shift : -shift;
                result += String.fromCharCode(((char.charCodeAt(0) - 65 + shiftAmount + 26) % 26) + 65);
            } else if (char === ' ') {
                result += ' ';
            }
        }
        return result;
    }

    updateCipheredText() {
        const text = document.getElementById('text').value;
        const shift = parseInt(document.getElementById('slider').value);
        const cipheredText = this.applyCipher(text, shift, true);
        document.getElementById('code').value = cipheredText;
    }

    updateOriginalText() {
        const cipheredText = document.getElementById('code').value;
        const shift = parseInt(document.getElementById('slider').value);
        const originalText = this.applyCipher(cipheredText, shift, false);
        document.getElementById('text').value = originalText;
    }

    loadJSONFile(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                try {
                    const jsonData = JSON.parse(e.target.result);
                    const textField = document.getElementById('text');
                    const codeField = document.getElementById('code');
                    const shift = parseInt(document.getElementById('slider').value);

                    if (jsonData.text) {
                        textField.value = jsonData.text;
                        codeField.value = this.applyCipher(textField.value, shift, true);
                    } else {
                        console.error('JSON file heeft geen tekst');
                        alert('Invalid JSON: Missing "text" property.');
                    }
                } catch (error) {
                    console.error('Invalid JSON file:', error);
                    alert('The file is not a valid JSON. Please check the format.');
                }
            };

            reader.readAsText(file);
        } else {
            alert('No file selected. Please choose a valid JSON file.');
        }
    }

    initEventListeners() {
        document.getElementById('slider').addEventListener('input', (event) => {
            document.getElementById('sliderValue').innerText = `Shift: ${event.target.value}`;
            this.updateCipheredText();
        });

        document.getElementById('text').addEventListener('input', () => {
            this.updateCipheredText();
        });

        document.getElementById('code').addEventListener('input', () => {
            this.updateOriginalText();
        });

        document.getElementById('load-json').addEventListener('change', (event) => {
            this.loadJSONFile(event);
        });

        this.updateCipheredText();
    }
}

// Instantiate the CaesarCipher class
new CaesarCipher();
