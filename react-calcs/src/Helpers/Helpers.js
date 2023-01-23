//list of functions for support

function convertBinary(inputStr) {
    return Array.from(inputStr).map((each)=>each.charCodeAt(0).toString(2)).join(' ');
}

function copyText(outputStr) {
    navigator.clipboard.writeText(outputStr);
}

function convertBinaryToText(inputStr) {
    return inputStr.split(" ").map(function(elem) {
        return String.fromCharCode(parseInt(elem, 2));
    }).join("")
}

const CalcTypes = [
    "Text to Binary",
    "Binary to Text"
]

export {convertBinary, copyText, convertBinaryToText, CalcTypes};