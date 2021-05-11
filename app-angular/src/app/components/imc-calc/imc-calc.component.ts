import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";


@Component({
  selector: 'app-imc-calc',
  templateUrl: './imc-calc.component.html',
  styleUrls: ['./imc-calc.component.css']
})
export class ImcCalcComponent implements OnInit {
  altura: FormControl;
  peso: FormControl;
  lblResultado;
  resultado:string;
  constructor() { 
    this.altura = new FormControl();
    this.peso = new FormControl();
    this.lblResultado = document.getElementById('lblResultado') as HTMLLabelElement;
    this.resultado = "";
  }

  ngOnInit(): void {

  }

  calculaIMC(){
    console.log((this.peso.value / (this.altura.value * this.altura.value)).toFixed(2));
    let imc = this.peso.value / (this.altura.value * this.altura.value);
    if (imc < 17){
      this.resultado = `${imc.toFixed(2)} - Muito Abaixo do Peso`
    }
    else if(imc >= 17 && imc <= 18.4 ){
      this.resultado = `${imc.toFixed(2)} - Abaixo do Peso`
    }
    else if(imc >= 18.5 && imc <= 24.9 ){
      this.resultado = `${imc.toFixed(2)} - Peso normal`
    }
    else if(imc >= 25 && imc <= 29.9){
      this.resultado = `${imc.toFixed(2)} - Acima do peso`
    }
    else if(imc >= 30 && imc <= 34.9 ){
      this.resultado = `${imc.toFixed(2)} - Obesidade grau I`
    }
    else if(imc >= 35 && imc <= 40 ){
      this.resultado = `${imc.toFixed(2)} - Obesidade grau II`
    }
    else if(imc > 40 ){
      this.resultado = `${imc.toFixed(2)} - Obesidade grau III`
    }
  }

  // 16 a 16,9 kg/m² - Muito abaixo do peso 
  // 17 a 18,4 kg/m² - Abaixo do peso 
  // 18,5 a 24,9 kg/m² - Peso normal 
  // 25 a 29,9 kg/m² - Acima do peso 
  // 30 a 34,9 kg/m² - Obesidade grau I 
  // 35 a 40 kg/m² - Obesidade grau II 
  // maior que 40 kg/m² - Obesidade grau III... 
}
