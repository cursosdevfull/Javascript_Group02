// Dominio
interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  contrasena: string;
  edad: number;
}

interface Producto {
  id: number;
  titulo: string;
  descripcion: string;
  marca: string;
  precio: number;
}

interface Venta {
  id: number;
  producto: Producto;
  fecha: Date;
}

// Aplicación
interface Repositorio<T> {
  insertar(entidad: T): void;
  actualizar(id: number, entidad: T): void;
  listar(): void;
  eliminar(id: number): void;
}

interface VentaRepositorio extends Repositorio<Venta> {
  listadoUltimoMes(): void;
}

class UsuarioCasoUso {
  constructor(private operaciones: Repositorio<Usuario>) {}

  insertar(usuario: Usuario) {
    this.operaciones.insertar(usuario);
  }
}

class ProductoCasoUso {
  constructor(private operaciones: Repositorio<Producto>) {}

  insertar(producto: Producto) {
    this.operaciones.insertar(producto);
  }
}

class VentaCasoUso {
  constructor(private operaciones: VentaRepositorio) {}

  insertar(venta: Venta) {
    this.operaciones.insertar(venta);
  }
}

// Infraestructura
abstract class BaseOperaciones<T> {
  actualizar(id: number, entidad: T) {}

  listar() {}

  eliminar(id: number) {}

  conexionMySQL() {}

  conexionOracle() {}

  conexionSQLServer() {}

  insertar(entidad: T) {
    this.insertMySQL(entidad);
  }

  insertMySQL(entidad: T) {
    this.conexionMySQL();
  }

  insertOracle(entidad: T) {
    this.conexionOracle();
  }
}

class UsuarioOperaciones
  extends BaseOperaciones<Usuario>
  implements Repositorio<Usuario> {}

class ProductoOperaciones
  extends BaseOperaciones<Producto>
  implements Repositorio<Producto> {}

class VentaOperaciones
  extends BaseOperaciones<Venta>
  implements VentaRepositorio
{
  listadoUltimoMes() {}
}

const usuarioOperaciones = new UsuarioOperaciones();
const usuarioCasouso = new UsuarioCasoUso(usuarioOperaciones);
