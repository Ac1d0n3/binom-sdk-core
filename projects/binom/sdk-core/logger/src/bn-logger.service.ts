import { Injectable } from '@angular/core';
import { BnLogSource } from './log-source.model';
import { BnLogMsg } from './log-msg.model';

@Injectable({
  providedIn: 'root'
})
export class BnLoggerService {

  constructor() { }

  doLogging:Boolean = true;
  logSources:string[]= ['bnLayout'];
  detailed:Boolean = true;
  logLevel:number = 4 ;


  doLog(logSource:BnLogSource, type:  'log' | 'info'  | 'warn' | 'debug' | 'error' = 'log' ){
    let level = 0;
    switch (type) {
      case 'debug': level = 4; break;
      case 'log': level = 3; break;
      case 'info': level = 2; break;
      case 'warn': level = 1; break;
      case 'error': level = 0; break;
    }
    return this.doLogging && this.logLevel >= level && (this.logSources.length === 0 || this.logSources.includes(logSource.module))
  }

  formatMsg(msg:BnLogMsg, logSource:BnLogSource, type:  'log' | 'info'  | 'warn' | 'debug' | 'error' = 'log'  ){
   
    let color = 'color: #008202';
    let retMsg = '%c' + msg.function +': ' + msg.msg;
    switch (type) {
      case 'log': color = 'color: #008202'; break;
      case 'info': color = 'color: #6495ED'; break;
      case 'warn': color = 'color: #008202'; break;
      case 'debug': color = 'color: #008202'; break;
      case 'error': color = 'color: #DC143C'; break;
      default:
        break;
    }
    if(this.detailed){
      if(msg.info) console.log(msg.info)
      return {
        msg: '@' + logSource.module + '::'+ logSource.source + '=>%c'+ msg.function +': ' + msg.msg +'\n',
        color: color 
      }
    }

    return {
      msg: retMsg,
      color: color
    }
  }

}
