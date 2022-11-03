import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  writeLog(text: string){
    console.log(text);
  }
}
