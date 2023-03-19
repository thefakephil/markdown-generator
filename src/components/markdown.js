import { markdownText } from '../strings/markdown-strings'

export default function MarkdownExample() {

    // function copyText() {
    //     // Get the text field
    //     const copyText = document.getElementById("markdown-text");
      
    //     // Select the text field
    //     copyText.select();
    //     copyText.setSelectionRange(0, 99999); // For mobile devices
      
    //      // Copy the text inside the text field
    //     navigator.clipboard.writeText(copyText.value);
      
    //     // Alert the copied text
    //     console.log("Copied the text: " + copyText.value);
    //   }

    return (
        <pre id="markdown-text"> {markdownText} </pre> 
    )
}