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
interface UsuarioRepositorio {
  insertar(usuario: Usuario): void;
}

interface ProductoRepositorio {
  insertar(producto: Producto): void;
}

interface VentaRepositorio {
  insertar(venta: Venta): void;
}

class UsuarioCasoUso {
  constructor(private operaciones: UsuarioRepositorio) {}

  insertar(usuario: Usuario) {
    this.operaciones.insertar(usuario);
  }
}

class ProductoCasoUso {
  constructor(private operaciones: ProductoRepositorio) {}

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
class UsuarioOperaciones implements UsuarioRepositorio {
  insertar(usuario: Usuario) {
    this.insertMySQL(usuario);
  }

  insertMySQL(usuario: Usuario) {
    this.conexionMySQL();
  }

  insertOracle(usuario: Usuario) {
    this.conexionOracle();
  }

  conexionMySQL() {}

  conexionOracle() {}

  conexionSQLServer() {}
}

class ProductoOperaciones implements ProductoRepositorio {
  insertar(producto: Producto) {
    this.insertMySQL(producto);
  }

  insertMySQL(producto: Producto) {
    this.conexionMySQL();
  }

  insertOracle(producto: Producto) {
    this.conexionOracle();
  }

  conexionMySQL() {}

  conexionOracle() {}

  conexionSQLServer() {}
}

class VentaOperaciones implements VentaRepositorio {
  insertar(venta: Venta) {
    this.insertMySQL(venta);
  }

  insertMySQL(venta: Venta) {
    this.conexionMySQL();
  }

  insertOracle(venta: Venta) {
    this.conexionOracle();
  }

  conexionMySQL() {}

  conexionOracle() {}

  conexionSQLServer() {}
}

const usuarioOperaciones = new UsuarioOperaciones();
const usuarioCasouso = new UsuarioCasoUso(usuarioOperaciones);
