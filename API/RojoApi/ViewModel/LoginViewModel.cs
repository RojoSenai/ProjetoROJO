﻿using System;
using System.ComponentModel.DataAnnotations;

namespace ProjetoClassificados.ViewModels
{
    public class LoginViewModel
    {

        [Required(ErrorMessage = "O campo Email é obrigatório!")]
        public string Email { get; set; }

        [Required(ErrorMessage = "O campo Senha é obrigatório!")]
        public string Senha { get; set; }
    }
}


