import { Injectable } from '@angular/core';
import { BnColor } from './bn-color';

@Injectable({
  providedIn: 'root'
})
export class BnColorsUtilsService {

  constructor() { }

  channelToHex(c:number):string {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  rgbToHex(r:number, g:number, b:number):string {
    return "#" + this.channelToHex(r) + this.channelToHex(g) + this.channelToHex(b);
  }

  rgbToHsl(r:number, g:number, b:number){
      r /= 255, g /= 255, b /= 255;
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h:number= 0, s:number= 0, l:number= 0 ;

      h = (max + min) / 2;
      s = (max + min) / 2;
      l = (max + min) / 2;

      if(max == min){
          h = s = 0; // achromatic
      }else{

          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch(max){
              case r: h = (g - b) / d + (g < b ? 6 : 0); break;
              case g: h = (b - r) / d + 2; break;
              case b: h = (r - g) / d + 4; break;
          }
          if(h){
            h /= 6 ;
          }

      }

      return [Math.floor(h*360), Math.round( s * 100 + Number.EPSILON ) , Math.round( l * 100 + Number.EPSILON ) ];

  }

  hue2rgbChannel(p:number, q:number, t:number):number{
      if(t < 0) t += 1;
      if(t > 1) t -= 1;
      if(t < 1/6) return p + (q - p) * 6 * t;
      if(t < 1/2) return q;
      if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
  }

  hslToRgb(h:number, s:number, l:number):number[]{
      var r, g, b;

      if(s == 0){
          r = g = b = l; // achromatic
      } else{
          var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var p = 2 * l - q;
          r = this.hue2rgbChannel(p, q, h + 1/3);
          g = this.hue2rgbChannel(p, q, h);
          b = this.hue2rgbChannel(p, q, h - 1/3);
      }
      return [(r * 255), (g * 255),( b * 255)];
  }

  hexToRgb(hex:string):number[]|null {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [parseInt(result[1], 16),parseInt(result[2], 16),parseInt(result[3], 16)]
     : null;
  }

  setOutput(mode:string,values:BnColor):string {
    if(values){
      if(mode === 'rgba' && values.rgba){
        values.output = 'rgba(' + values.rgba[0] + ',' + values.rgba[1] + ',' + values.rgba[2]+ ',' + values.rgba[3] + ')'
      }
      if(mode === 'rgb' && values.rgba){
        values.output = 'rgb(' + values.rgba[0] + ',' + values.rgba[1] + ',' + values.rgba[2] + ')'
      }
      if(mode === 'hsl' && values.hsla){
        values.output = 'hsl(' +  values.hsla[0] + ',' + values.hsla[1] + ',' + values.hsla[2] + ')'
      }
      if(mode === 'hsla' && values.hsla){
        values.output = 'hsla(' +  values.hsla[0] + ',' + values.hsla[1] + ',' + values.hsla[2] +',' + values.hsla[3] + ')'
      }
      if(mode === 'hex' && values.hex){
        values.output = values.hex
      }
      return values.output ? values.output: ''
    } else return ''

  }

  allValsFromRgb(r:number,g:number,b:number,a:number=1,mode:string='rgba'):BnColor|null{
    let values = {
      rgba: [r,g,b,a],
      hsla: this.rgbToHsl(r,g,b).concat(a),
      hex: this.rgbToHex(r,g,b),
      use: 'rgba(' + r + ',' + g + ',' + b + ','+ a +')',
      output: ''
    }
    values.output = this.setOutput(mode,values)
    return values
  }

  allValuesFromHex(hexVal:string, a:number=1, mode:string='rgba'):BnColor|null{
    if(hexVal){
      let rgb = this.hexToRgb(hexVal);
      if(rgb)
        return this.allValsFromRgb(rgb[0],rgb[1],rgb[2],a,mode);
      else return null
    } else return null
  }

  allValuesFromHsl(h:number,s:number,l:number, a:number=1, mode:string='rgba'):BnColor|null{
    let rgb = this.hslToRgb(h,s,l);
    if(rgb)
      return this.allValsFromRgb(rgb[0],rgb[1],rgb[2],a,mode);
    else return null
  }


  getValuesFromValueString(valueStr:string):BnColor|null {
    var matchColors1 = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    var match1 = matchColors1.exec(valueStr);
    
    var matchColors2 = /rgba\(\s*(-?\d+|-?\d*\.\d+(?=%))(%?)\s*,\s*(-?\d+|-?\d*\.\d+(?=%))(\2)\s*,\s*(-?\d+|-?\d*\.\d+(?=%))(\2)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/;
    var match2 = matchColors2.exec(valueStr);
    
    var matchColors3 = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/
    var match3 = matchColors3.exec(valueStr);

    var matchColors4 = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g;
    var match4 = matchColors3.exec(valueStr);
    
    if (match1 !== null) {
      return this.allValuesFromHex(match1[1], 1,'rgba')
    } else if (match2 !== null) {
      return this.allValsFromRgb(parseInt(match2[1])|0,parseInt(match2[2])|0,parseInt(match2[3])|0,parseInt(match2[4])|1,'rgba');
    } else if (match3 !== null) {
      return this.allValsFromRgb(parseInt(match3[1])|0,parseInt(match3[2])|0,parseInt(match3[3])|0,1,'rgba');
    } else if (match4 !== null) {
      return null   
    } else return null

  }

}
