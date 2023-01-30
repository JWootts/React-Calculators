//list of functions for support

function convertBinary(inputStr) {
    return Array.from(inputStr).map((each)=>each.charCodeAt(0).toString(2)).join(' ');
}

function convertBinaryToText(inputStr) {
    return inputStr.split(" ").map(function(elem) {
        return String.fromCharCode(parseInt(elem, 2));
    }).join("")
}

function negateBits(bits){
    return bits.replaceAll('1', '.').replaceAll('0','1').replaceAll('.','0');
}

function copyText(outputStr) {
    navigator.clipboard.writeText(outputStr);
}

function handleCalcSelection(type, str){
    switch(type) {
        case "Text to Binary":
          return convertBinary(str);
        case "Binary to Text":
          return convertBinaryToText(str);
        case "Negate Bits":
            return negateBits(str);
        default:
          break;
      }
}

const CalcTypes = [
    "Text to Binary",
    "Binary to Text",
    "Negate Bits",
]

export {handleCalcSelection, copyText, CalcTypes};