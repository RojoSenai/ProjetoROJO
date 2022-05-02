using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using RojoAPI.Domains;

#nullable disable

namespace RojoAPI.Contexts
{
    public partial class RojoContext : DbContext
    {
        public RojoContext()
        {
        }

        public RojoContext(DbContextOptions<RojoContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Comentario> Comentarios { get; set; }
        public virtual DbSet<Cor> Cors { get; set; }
        public virtual DbSet<CorEmpresa> CorEmpresas { get; set; }
        public virtual DbSet<Empresa> Empresas { get; set; }
        public virtual DbSet<Evento> Eventos { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuarios { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("server=rojo-db.ck8qmzbx3cm8.us-east-1.rds.amazonaws.com; database=Rojo_App; user Id=admin; pwd=6SDJhW9N5dplhbmPGe9U;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Comentario>(entity =>
            {
                entity.HasKey(e => e.Idcomentario)
                    .HasName("PK__Comentar__46E6637E86912EB2");

                entity.ToTable("Comentario");

                entity.Property(e => e.Idcomentario).HasColumnName("IDComentario");

                entity.Property(e => e.CadastrarComentario)
                    .IsRequired()
                    .HasMaxLength(2300)
                    .IsUnicode(false);

                entity.Property(e => e.Idevento).HasColumnName("IDEvento");

                entity.HasOne(d => d.IdeventoNavigation)
                    .WithMany(p => p.Comentarios)
                    .HasForeignKey(d => d.Idevento)
                    .HasConstraintName("FK__Comentari__IDEve__4D94879B");
            });

            modelBuilder.Entity<Cor>(entity =>
            {
                entity.HasKey(e => e.Idcor)
                    .HasName("PK__Cor__91A98A64A37282CC");

                entity.ToTable("Cor");

                entity.Property(e => e.Idcor).HasColumnName("IDCor");

                entity.Property(e => e.NomeCor)
                    .HasMaxLength(7)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<CorEmpresa>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("CorEmpresa");

                entity.Property(e => e.Idcor).HasColumnName("IDCor");

                entity.Property(e => e.Idempresa).HasColumnName("IDEmpresa");

                entity.HasOne(d => d.IdcorNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.Idcor)
                    .HasConstraintName("FK__CorEmpres__IDCor__4222D4EF");

                entity.HasOne(d => d.IdempresaNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.Idempresa)
                    .HasConstraintName("FK__CorEmpres__IDEmp__412EB0B6");
            });

            modelBuilder.Entity<Empresa>(entity =>
            {
                entity.HasKey(e => e.Idempresa)
                    .HasName("PK__Empresa__ED09F0D5A3C931F3");

                entity.ToTable("Empresa");

                entity.HasIndex(e => e.RazaoSocial, "UQ__Empresa__448779F03096884F")
                    .IsUnique();

                entity.HasIndex(e => e.Endereço, "UQ__Empresa__4DFC5FCE8276FF37")
                    .IsUnique();

                entity.HasIndex(e => e.Telefone, "UQ__Empresa__4EC504B60D3E1DD8")
                    .IsUnique();

                entity.HasIndex(e => e.Email, "UQ__Empresa__A9D10534B6B252F6")
                    .IsUnique();

                entity.HasIndex(e => e.Cnpj, "UQ__Empresa__AA57D6B4C95D6EB9")
                    .IsUnique();

                entity.HasIndex(e => e.NomeFantasia, "UQ__Empresa__F5389F319B9A93F0")
                    .IsUnique();

                entity.Property(e => e.Idempresa).HasColumnName("IDEmpresa");

                entity.Property(e => e.Cnpj)
                    .IsRequired()
                    .HasMaxLength(14)
                    .IsUnicode(false)
                    .HasColumnName("CNPJ")
                    .IsFixedLength(true);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Endereço)
                    .IsRequired()
                    .HasMaxLength(505)
                    .IsUnicode(false);

                entity.Property(e => e.FundaçãoAniversario).HasColumnType("date");

                entity.Property(e => e.NomeFantasia)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RazaoSocial)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Telefone)
                    .IsRequired()
                    .HasMaxLength(11)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Evento>(entity =>
            {
                entity.HasKey(e => e.Idevento)
                    .HasName("PK__Evento__E63053027F36638F");

                entity.ToTable("Evento");

                entity.Property(e => e.Idevento).HasColumnName("IDEvento");

                entity.Property(e => e.DataEventoFim).HasColumnType("datetime");

                entity.Property(e => e.DataEventoIncio).HasColumnType("datetime");

                entity.Property(e => e.Descricao)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Idempresa).HasColumnName("IDEmpresa");

                entity.Property(e => e.Idusuario).HasColumnName("IDUsuario");

                entity.Property(e => e.NomeEvento)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Palestrante)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdempresaNavigation)
                    .WithMany(p => p.Eventos)
                    .HasForeignKey(d => d.Idempresa)
                    .HasConstraintName("FK__Evento__IDEmpres__49C3F6B7");

                entity.HasOne(d => d.IdusuarioNavigation)
                    .WithMany(p => p.Eventos)
                    .HasForeignKey(d => d.Idusuario)
                    .HasConstraintName("FK__Evento__IDUsuari__4AB81AF0");
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdtipoUsuario)
                    .HasName("PK__tipoUsua__53289754A970D74B");

                entity.ToTable("tipoUsuario");

                entity.Property(e => e.IdtipoUsuario).HasColumnName("IDTipoUsuario");

                entity.Property(e => e.PerfisDeUsuario)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.Idusuario)
                    .HasName("PK__Usuario__523111690BAA72AF");

                entity.ToTable("Usuario");

                entity.HasIndex(e => e.Email, "UQ__Usuario__A9D1053456DFAC3E")
                    .IsUnique();

                entity.Property(e => e.Idusuario).HasColumnName("IDUsuario");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Idempresa).HasColumnName("IDEmpresa");

                entity.Property(e => e.IdtipoUsuario).HasColumnName("IDTipoUsuario");

                entity.Property(e => e.ImagemUsuario)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.NomeUsu)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdempresaNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.Idempresa)
                    .HasConstraintName("FK__Usuario__IDEmpre__46E78A0C");

                entity.HasOne(d => d.IdtipoUsuarioNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdtipoUsuario)
                    .HasConstraintName("FK__Usuario__IDTipoU__45F365D3");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
