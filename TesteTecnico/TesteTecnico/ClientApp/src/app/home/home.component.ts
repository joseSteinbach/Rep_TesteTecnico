import { Component } from '@angular/core';
import { ClasseRetorno } from '../../models/ClasseRetorno';
import { ServiceTaxajuros } from '../../services/ServiceTaxajuros';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {


  constructor(
    private serviceTaxaJuros: ServiceTaxajuros
  ) {

  }


  private CalcularDadosGeral2(valorInicial, valorJuros, ValorTempo) {

    this.serviceTaxaJuros.ByBuscaTaxajurosFixo2(valorInicial, valorJuros, ValorTempo).subscribe(

        (valoresJuros: number) => {

        var Valorresultado2 = document.getElementById("Valorresultado2") as HTMLInputElement;
        Valorresultado2.value = valoresJuros.toString();
         
        },
        (erro: any) => {

          var Valorresultado = document.getElementById("Valorresultado") as HTMLInputElement;
          if (Valorresultado != null)
            Valorresultado.value = "0";
          alert("Problema ao buscar valores.");
        }
      )

  }


  private CalcularDados2() {


    let continuar = true;

    
    var ValorInicial = document.getElementById("ValorInicial") as HTMLInputElement;
    var ValorCalculoTaxa = document.getElementById("ValorCalculoTaxa2") as HTMLInputElement;
    var ValorTempo = document.getElementById("ValorTempo") as HTMLInputElement;

    var ValorInicialFloat = parseFloat(ValorInicial.value);
    var ValorCalculoTaxaFloat = parseFloat(ValorCalculoTaxa.value);
    var ValorTempoInt = parseInt(ValorTempo.value);

    if (isNaN(ValorInicialFloat) || (ValorInicialFloat <= 0)) {
      continuar = false;
      alert("Valor inicial é obrigatório.");
      }
    else if (isNaN(ValorCalculoTaxaFloat) || (ValorCalculoTaxaFloat <= 0)) {
      continuar = false;
      alert("Valor do juros é obrigatório..");
    } else if (isNaN(ValorTempoInt) || (ValorTempoInt <= 0)) {
      continuar = false;
      alert("Tempo é obrigatório.");
    }
  
    if (continuar){

      this.serviceTaxaJuros.ByBuscaTaxajurosFixo(parseFloat(ValorInicial.value)).subscribe(

        (valoresJuros: number) => {

          var ValorInicial = document.getElementById("ValorInicial") as HTMLInputElement;
          var ValorTempo = document.getElementById("ValorTempo") as HTMLInputElement;
          this.CalcularDadosGeral2(ValorInicial.value, valoresJuros, ValorTempo.value)      

        },
        (erro: any) => {

          var Valorresultado = document.getElementById("Valorresultado") as HTMLInputElement;
          if (Valorresultado != null)
            Valorresultado.value = "0";
          alert("Problema ao buscar valores.");
        }
      )
    }


  }




  private funcaoRetornoValor1() {

    var ValorCalculoTaxa = document.getElementById("ValorCalculoTaxa") as HTMLInputElement;

    let valor = 0;
    if (ValorCalculoTaxa != null && ValorCalculoTaxa != undefined)
      valor = parseFloat(ValorCalculoTaxa.value);

    if ((isNaN(valor)) ||  (valor <= 0)) {
      alert("Informe um valor válido. Valor deve ser maior do que zero.")
    } else {

      this.serviceTaxaJuros.ByBuscaTaxajurosFixo(valor).subscribe(

        (valores: number) => {

          var Valorresultado = document.getElementById("Valorresultado") as HTMLInputElement;
          if (Valorresultado != null)
            Valorresultado.value = valores.toString();
        },
        (erro: any) => {

          var Valorresultado = document.getElementById("Valorresultado") as HTMLInputElement;
          if (Valorresultado != null)
            Valorresultado.value = "0";
          alert("Problema ao buscar valores.");
        }
      )
    }

  }


}
