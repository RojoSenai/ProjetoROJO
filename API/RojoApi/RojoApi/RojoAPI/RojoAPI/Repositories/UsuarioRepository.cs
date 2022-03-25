using Microsoft.EntityFrameworkCore;
using ProjetoClassificados.Utils;
using RojoAPI.Contexts;
using RojoAPI.Domains;
using RojoAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RojoAPI.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        RojoContext ctx = new RojoContext();

        public void Atualizar(int id, Usuario UsuarioAtualizado)
        {
            throw new NotImplementedException();
        }

        public Usuario BuscarPorId(int id)
        {
            return ctx.Usuarios.FirstOrDefault(x => x.Idusuario == id);
        }

        public void Cadastrar(Usuario novoUsuario)
        {
            ctx.Usuarios.Add(novoUsuario);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Usuarios.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        public List<Usuario> Listar()
        {
            return ctx.Usuarios
           .Include(x => x.IdempresaNavigation)
           .Select(x => new Usuario
           {
               Idusuario = x.Idusuario,
               IdempresaNavigation = x.IdempresaNavigation,
               Email = x.Email,
               Senha = x.Senha,
               NomeUsu = x.NomeUsu,
               ImagemUsuario = x.ImagemUsuario
           })
           .ToList();
        }

        public Usuario Login(string email, string senha)
        {
            Usuario usuario = ctx.Usuarios.FirstOrDefault(u => u.Email == email);

            if (usuario != null)
            {
                if (usuario.Senha.Length != 60 && usuario.Senha[0].ToString() != "$")
                {
                    string senhaHash = Criptografia.gerarHash(senha);
                    usuario.Senha = senhaHash;
                    ctx.Usuarios.Update(usuario);
                    ctx.SaveChanges();
                    return usuario;
                }
                bool confere = Criptografia.compararSenha(senha, usuario.Senha);
                if (confere)
                {
                    return usuario;
                }
            }
            return null;
        }

    }
}
