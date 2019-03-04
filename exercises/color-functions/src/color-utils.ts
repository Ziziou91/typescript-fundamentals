//TODO: Implement hexToRgb
//hexToRgb('00ff00') => {r: 0, g: 255, b: 0}
export const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  const result = hex.length === 3 ? hex.replace(/.{1}/g, letter => letter + letter).match(/.{2}/g) : hex.match(/.{2}/g);
  if (result === null) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(result[0], 16),
    g: parseInt(result[1], 16),
    b: parseInt(result[2], 16)
  };
};

//TODO: Implement rgbToHex
//rgbToHex(255, 0, 0); => 'ff0000'
export const rgbToHex = (r: number, g: number, b: number): string => {
  return [r, g, b].reduce((hex, rgb) => {
    rgb = Math.max(0, Math.min(255, rgb));
    let rgbString = parseInt(rgb.toString(), 10).toString(16);
    return (hex += rgbString.length === 1 ? rgbString + rgbString : rgbString);
  }, '');
};

interface Car {
  make: string;
  model: string;
  year: number;
}

let myCar: Car = {
  make: 'Honda',
  model: 'Accord',
  year: 1992,
  color: 'blue'
};

interface Car {
  color: string;
}

let age = 34;
let myAge = age as any;
myAge = '35';

function add(a: any, b: any): any {
  return a + b;
}
