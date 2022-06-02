using RojoAPI.Contexts;
using RojoAPI.Domains;
using RojoAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RojoAPI.Repositories
{
    public class CorEmpresaRepository : ICorEmpresaRepository
    {

        RojoContext ctx = new RojoContext();
        public void Atualizar(int id, CorEmpresa CorAtualizada)
        {
            CorEmpresa CorBuscada = ctx.CorEmpresas.Find(id);

            if (CorAtualizada.Idcor != null)
            {
                CorBuscada.Idcor = CorAtualizada.Idcor;

                ctx.CorEmpresas.Update(CorBuscada);

                ctx.SaveChanges();
            }
        }

        public CorEmpresa BuscarPorId(int id)
        {
            return ctx.CorEmpresas.FirstOrDefault(x => x.Idcor == id);
        }

        public void Cadastrar(CorEmpresa NovaCor)
        {
            ctx.CorEmpresas.Add(NovaCor);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.CorEmpresas.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        public List<CorEmpresa> Listar()
        {
            return ctx.CorEmpresas
           .Select(x => new CorEmpresa
           {
               Idcor = x.Idcor,
               Idempresa = x.Idempresa,
           })
           .ToList();
        }

    }
}
