import { MD5 } from './MD5'

export function isColor(strColor){
    var s = new Option().style;
    s.color = strColor;
    return s.color === strColor;
}

export function getColorToNonColorWord(word, index) {
    const checksum = MD5(word + index)
    const red = transformHexdecimalToColour(checksum.slice(0, 11))
    const green = transformHexdecimalToColour(checksum.slice(11, 21))
    const blue = transformHexdecimalToColour(checksum.slice(22))
    
    return `#${red}${green}${blue}`
}

function transformHexdecimalToColour(hex) {
  return (parseInt(hex, 16) % 256).toString(16).padStart(2, '0')
}

export function getListFromURLHash(propertyName) {
    const hashParams = new URLSearchParams(window.location.hash.substr(1));
    const tags = hashParams.get(propertyName);

    if (!tags) return [];

    return tags.split(",").map((tag) => tag.trim()).filter(Boolean);
}
