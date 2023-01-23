//list of functions for support

function convertBinary(inputStr) {
    return Array.from(inputStr).map((each)=>each.charCodeAt(0).toString(2)).join(' ');
}

function copyText(outputStr) {
    navigator.clipboard.writeText(outputStr);
}

export {convertBinary, copyText};