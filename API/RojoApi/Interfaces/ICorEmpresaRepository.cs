using RojoAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RojoAPI.Interfaces
{
    interface ICorEmpresaRepository
    {
        void Cadastrar(CorEmpresa NovaCor);
        CorEmpresa BuscarPorId(int id);
        void Atualizar(int id, CorEmpresa CorAtualizada);
        void Deletar(int id);
        List<CorEmpresa> Listar();
    }
}
