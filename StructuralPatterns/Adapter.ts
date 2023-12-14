class Hex {
  colorCode: string;

  constructor(colorCode: string) {
    this.colorCode = colorCode;
  }

  getColorCode(): string {
    return this.colorCode;
  }
}

class RGB {
  red: number;
  green: number;
  blue: number

  constructor(red: number, green: number, blue: number) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  getColorCode(): number[] {
    return [this.red, this.green, this.blue]
  }
}

class RGB_HexAdapter {
  static RGBToHex(rgb: RGB): Hex {
    const values = rgb.getColorCode();
    let code = '#'
    for (let value of values) {
      code = code.concat(value.toString(16));
    }

    return new Hex(code);
  }

  static HexToRGB(hex: Hex): RGB {
    const code = hex.getColorCode().replace('#', '').split('');

    let red = parseInt([code[0], code[1]].join(''), 16);
    let green = parseInt([code[2], code[3]].join(''), 16);
    let blue = parseInt([code[4], code[5]].join(''), 16);

    return new RGB(red, green, blue);
  }
}

const hexColor = new Hex('#25f19c');
const rgbColor = new RGB(147, 92, 36);

let newHex = RGB_HexAdapter.RGBToHex(rgbColor);
let newRGB = RGB_HexAdapter.HexToRGB(hexColor);

let rgb = rgbColor.getColorCode();
let rgb2 = newRGB.getColorCode();

console.log(`Hex to RGB:\nOriginal: ${hexColor.getColorCode()}, Adapted: [${rgb2[0]}, ${rgb2[1]}, ${rgb2[2]}]\n`);
console.log(`RGB to Hex:\nOriginal: [${rgb[0]}, ${rgb[1]}, ${rgb[2]}], Adapted: ${newHex.getColorCode()}\n`);