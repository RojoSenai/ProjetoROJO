USE Rojo_App;
GO

--------------------------------- DML ---------------------------------

INSERT INTO tipoUsuario (PerfisDeUsuario)
VALUES		('Administrador'),('Usuario Comum'),('Administrador Empresa');
GO

INSERT INTO Empresa (CNPJ, Email, Senha, NomeFantasia, RazaoSocial, FundaçãoAniversario, Endereço, Telefone, TotalFuncionarios)
VALUES ('61585865000151', 'Drogasil@hotmail.com', '123456789','Drogasil', 'Raia Drogasil S.A', '1935/03/28', 'Av. Corifeu de Azevedo Marques, 3097 - Vila Butantã, São Paulo', '99999999999', 50000);
GO

INSERT INTO Usuario (IDTipoUsuario, IDEmpresa, Email,Senha,NomeUsu )
VALUES (2, 2, 'matheusmarthis@drogasil.com', '123456789', 'Matheus Martins');
GO

INSERT INTO Evento (IDEmpresa, IDUsuario, NomeEvento, Palestrante, Comentario, DataEventoIncio, DataEventoFim)
VALUES (2, 2, 'Como se tornar um bom vendedor', 'Matheus Novais', 'muito boa palestra', '2022-03-21 13:30:00.000', '2022-03-21 17:00:00:000')
SELECT  * FROM Usuario