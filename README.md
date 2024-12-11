# Caesar Cipher Web Application

This is a simple web-based Caesar Cipher implementation that allows you to encode and decode text using a shift value. The application features:

- A **slider** to control the shift value for encoding/decoding.
- A **text input field** where you can enter the original text to be encoded or the ciphered text to be decoded.
- A **code output field** that displays the encoded/decoded text based on the selected shift value.
- An option to **upload a JSON file** containing the text to be encoded or decoded, with the text being automatically processed.

## Features

- **Shift Slider**: Adjust the shift value used for the cipher. This value can be between 1 and 25 (inclusive).
- **Text Encoding/Decoding**: Enter text to be encoded or decoded using the Caesar Cipher. The result is displayed in real-time.
- **File Upload**: Load a JSON file containing the text to be encoded. The text will be automatically encrypted based on the current shift value.
- **Live Updates**: The ciphered text and the original text update dynamically when the user interacts with the input fields or the shift slider.

## How It Works

The Caesar Cipher algorithm works by shifting each letter of the input text by a specified number of positions in the alphabet. Lowercase and uppercase letters are treated separately, and spaces are preserved in the output.

### Encoding:
Each letter's ASCII code is shifted by the defined shift value, and the result is wrapped around if necessary.

### Decoding:
The ciphered text is decoded by shifting in the opposite direction, restoring the original text.

## Installation

To use this application, simply open the `index.html` file in a web browser.

### Dependencies

This project doesn't require any external dependencies. It relies purely on HTML, CSS, and vanilla JavaScript.

## Usage

1. **Text Input**: Type the text you want to encode in the "Text" field. The ciphered text will appear in the "Ciphered Text" field as you adjust the slider.
2. **Slider**: Adjust the shift value (between 1 and 25) to change the encoding/decoding shift.
3. **Code Input**: Paste or type the ciphered text in the "Ciphered Text" field to decode it.
4. **JSON File Upload**: Click on the "Load JSON" button to upload a JSON file that contains the text. The text will be encrypted and displayed in the "Ciphered Text" field.

### Example JSON Format:

```json
{
  "text": "Hello World"
}
```
## Layout

The layout was made using basic HTML and Bootstrap 5.3.3, with a few personal styles.
