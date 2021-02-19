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



        [HttpGet("taxaJuros/{parametros}")]
        public IActionResult TaxaJuros(string parametros)
        {
            try
            {
                double Resultado = Convert.ToDouble(parametros) * 0.1;

                Resultado = System.Math.Round(Resultado, 2);

                return Ok(Convert.ToDouble(parametros) * 0.1);

            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }

        }

    }
}
