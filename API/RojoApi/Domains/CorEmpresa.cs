using System;
using System.Collections.Generic;

#nullable disable

namespace RojoAPI.Domains
{
    public partial class CorEmpresa
    {
        public int? Idempresa { get; set; }
        public int? Idcor { get; set; }

        public virtual Cor IdcorNavigation { get; set; }
        public virtual Empresa IdempresaNavigation { get; set; }
    }
}
