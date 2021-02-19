using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace Teste_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalcularJurosController : ControllerBase
    {

        public CalcularJurosController() //IRepository repo
        {

        }





        [HttpGet("calculajuros/{parametros}")]
        public IActionResult calculajuros(string parametros)
        {
            try
            {
            string[] Valores = parametros.Split("&");
            double Resultado = 0;
            if (Valores.Length == 3)
                {
                    string ValorInicialStr = RecuperarValor(Valores[0]);
                    ValorInicialStr = ValorInicialStr.Replace('.', ',');
                    double ValorInicial = Convert.ToDouble(ValorInicialStr);
                    string ValorJurosStr = RecuperarValor(Valores[1]);
                    ValorJurosStr = ValorJurosStr.Replace('.',',');
                    double ValorJuros = Convert.ToDouble(ValorJurosStr) / 100;
                    double ValorTempo = Convert.ToInt32(RecuperarValor(Valores[2]));

                    Resultado = (ValorInicial * Math.Pow((1 + ValorJuros), ValorTempo) * ValorJuros) / (Math.Pow((1 + ValorJuros), ValorTempo) - 1);
                    Resultado = System.Math.Round((ValorInicial + Resultado), 2);

                }

                return Ok(Resultado);

            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }

        }


        private string RecuperarValor(string pValor)
        {

            return pValor.Split("=")[1];
        }

    }
}
