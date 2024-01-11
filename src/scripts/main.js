import { toPng } from "html-to-image";
import { saveAs } from "file-saver";

window.onload = () => {
    const buttonEl = document.getElementsByTagName("button")[0];
    const textareaEl = document.getElementsByTagName("textarea")[0];
    const outputSection = document.getElementsByTagName("section")[0];
    const outputTextEl = document.getElementById("output_meme_text");

    // Click button and create meme
    buttonEl.addEventListener("click", () => {
        const memeText = makeAlternatingCase(textareaEl.value);

        outputSection.style.display = "block";
        outputTextEl.textContent = memeText;

        // Convert HTML to image and download
        saveAs(convertElementToImage(outputSection), "mocking-spongebob-meme.png");
    });
    
    
    // Make meme text
    function makeAlternatingCase(text) {
        let alternateCaseText = "";

        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                alternateCaseText += text[i].toLowerCase();
            } else {
                alternateCaseText += text[i].toUpperCase();
            }
        }

        return alternateCaseText;
    }

    // Convert element to image
    function convertElementToImage(element) {
        toPng(element).then(function (dataUrl) {
            return dataUrl;
        });
    }
}
