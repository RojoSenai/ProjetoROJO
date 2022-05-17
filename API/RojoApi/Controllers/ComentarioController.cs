using Microsoft.AspNetCore.Authorization;
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
    [Route("api/[controller]")]
    [ApiController]
    public class ComentarioController : ControllerBase
    {

        private IComentarioRepository _ComentarioRepository { get; set; }

        public ComentarioController()
        {
            _ComentarioRepository = new ComentarioRepository();
        }

        //CADASTRAR
        [HttpPost]
        //[Authorize(Roles = "1, 2, 3")]
        public IActionResult Post(Comentario NovaComentario)
        {
            try
            {
                _ComentarioRepository.Cadastrar(NovaComentario);

                return StatusCode(201);
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }

        //DELETAR
        [HttpDelete("{id}")]
        //[Authorize(Roles = "1, 2, 3")]
        public IActionResult Delete(int id)
        {
            try
            {
                // Faz a chamada para o método
                _ComentarioRepository.Deletar(id);

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
        //[Authorize(Roles = "1, 2, 3")]
        public IActionResult GetAll()
        {
            try
            {
                List<Comentario> ListarTodos = _ComentarioRepository.Listar();

                return Ok(ListarTodos);
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }

        //BUSCAR POR ID
        [HttpGet("{id}")]
        //[Authorize(Roles = "1, 2, 3")]
        public IActionResult GetById(int id)
        {
            try
            {
                // Retora a resposta da requisição fazendo a chamada para o método
                return Ok(_ComentarioRepository.BuscarPorId(id));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        //Atualizar Usuario
        [HttpPut("{id}")]
        //[Authorize(Roles = "1, 2, 3")]
        public IActionResult Put(int id, Comentario ComentarioAtualizado)
        {
            try
            {
                // Faz a chamada para o método
                _ComentarioRepository.Atualizar(id, ComentarioAtualizado);

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
