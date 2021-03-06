import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  palabra = 'AGUACATE';
  palabraOculta = '';

  intentos = 0;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(){
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }

  comprobar(letra){
    this.existeLetra(letra);
    const palabraOcultaArr = this.palabraOculta.split(' ');
    for(let i=0;i<this.palabra.length; i++){
      if(this.palabra[i]===letra){
        palabraOcultaArr[i] = letra;
      }
    }
    this.palabraOculta = palabraOcultaArr.join(' ');
    console.log(palabraOcultaArr);
  }

  existeLetra(letra){
    if(this.palabra.indexOf(letra)>=0){
      console.log('letra existe');
    }else{
      console.log('letra no existe');
      this.intentos++;
    }
  }

}
