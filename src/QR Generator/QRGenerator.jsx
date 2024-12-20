import QRCode from "react-qr-code";
import React, { useState } from "react";

function QRGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGeneratorQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value"
        />

        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGeneratorQrCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}

export default QRGenerator;
