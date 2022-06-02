using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RojoAPI.Domains;
using RojoAPI.Interfaces;
using RojoAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RojoAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class CorEmpresaController : ControllerBase
    {
        private ICorEmpresaRepository _CorEmpresaRepository { get; set; }

        public CorEmpresaController()
        {
            _CorEmpresaRepository = new CorEmpresaRepository();
        }

        //CADASTRAR
        [HttpPost]
        //[Authorize(Roles = "3")]
        public IActionResult Post(CorEmpresa NovaCor)
        {
            try
            {
                _CorEmpresaRepository.Cadastrar(NovaCor);

                return StatusCode(201);
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }

        //DELETAR
        [HttpDelete("{id}")]
        //[Authorize(Roles = "1, 3")]
        public IActionResult Delete(int id)
        {
            try
            {
                // Faz a chamada para o método
                _CorEmpresaRepository.Deletar(id);

                // Retorna um status code
                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }


        //LISTAR TODOS
        [HttpGet]
        //[Authorize(Roles = "1, 3")]
        public IActionResult GetAll()
        {
            try
            {
                List<CorEmpresa> ListarTodos = _CorEmpresaRepository.Listar();

                return Ok(ListarTodos);
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }

        //BUSCAR POR ID
        [HttpGet("{id}")]
        //[Authorize(Roles = "1, 3")]
        public IActionResult GetById(int id)
        {
            try
            {
                // Retora a resposta da requisição fazendo a chamada para o método
                return Ok(_CorEmpresaRepository.BuscarPorId(id));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        //Atualizar Usuario
        [HttpPut("{id}")]
        //[Authorize(Roles = "1, 2, 3")]
        public IActionResult Put(int id, CorEmpresa CorEmpresaAtualizado)
        {
            try
            {
                // Faz a chamada para o método
                _CorEmpresaRepository.Atualizar(id, CorEmpresaAtualizado);

                // Retorna um status code
                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
