class OperacionesDB {
  insert(usuario: Usuario) {}
  list() {}
  update(id: number, usuario: Usuario) {}
  delete(id: number) {}
}

class Notificaciones {
  sentEmail(usuario: Usuario) {}
}

class Seguridad {
  authentication(email: string, password: string) {}
}

class Usuario {
  name: string;
  lastname: string;
  email: string;
  password: string;

  constructor(name: string, lastname: string, email: string, password: string) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
  }
}

class GestionUsuario {
  operacionesDB;
  notificaciones;
  seguridad;

  constructor(
    operacionesDB: OperacionesDB,
    notificaciones: Notificaciones,
    seguridad: Seguridad
  ) {
    this.operacionesDB = operacionesDB;
    this.notificaciones = notificaciones;
    this.seguridad = seguridad;
  }

  registro(usuario: Usuario) {
    this.operacionesDB.insert(usuario);
    this.notificaciones.sentEmail(usuario);
  }

  login(usuario: Usuario) {
    this.seguridad.authentication(usuario.email, usuario.password);
  }
}
const operacionesDB = new OperacionesDB();
const notificaciones = new Notificaciones();
const seguridad = new Seguridad();

const gestionUsuario: GestionUsuario = new GestionUsuario(
  operacionesDB,
  notificaciones,
  seguridad
);
const usuario: Usuario = new Usuario(
  'Sergio',
  'Hidalgo',
  'sergio@correo.com',
  '12345'
);
gestionUsuario.registro(usuario);
gestionUsuario.login(usuario);
