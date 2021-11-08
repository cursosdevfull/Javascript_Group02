// Dominio
interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  contrasena: string;
  edad: number;
}

// Aplicación
interface Repositorio {
  insertar(usuario: Usuario): void;
}

class CasoUso {
  constructor(private operaciones: Repositorio) {}

  insertar(usuario: Usuario) {
    this.operaciones.insertar(usuario);
  }
}

// Infraestructura
class Operaciones implements Repositorio {
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

const operaciones = new Operaciones();
const casouso = new CasoUso(operaciones);
