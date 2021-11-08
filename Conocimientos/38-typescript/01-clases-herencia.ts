class Equipo {
  private area: string;
  modelo: string;
  protected marca: string;

  constructor(area: string, modelo: string, marca: string) {
    this.area = area;
    this.modelo = modelo;
    this.marca = marca;
  }
}

class Impresora extends Equipo {
  cantidadPaginasPorMinuto: number;

  constructor(
    area: string,
    modelo: string,
    marca: string,
    cantidadPaginasPorMinuto: number
  ) {
    super(area, modelo, marca);
    this.cantidadPaginasPorMinuto = cantidadPaginasPorMinuto;
  }
}

class Computadora extends Equipo {
  tipoProcesador: string;
  memoria: string;

  constructor(
    area: string,
    modelo: string,
    marca: string,
    tipoProcesador: string,
    memoria: string
  ) {
    super(area, modelo, marca);
    this.tipoProcesador = tipoProcesador;
    this.memoria = memoria;
  }
}

class ImpresoraInalambrica extends Impresora {
  constructor(
    area: string,
    modelo: string,
    marca: string,
    cantidadPaginasPorMinuto: number
  ) {
    super(area, modelo, marca, cantidadPaginasPorMinuto);
  }

  getMarca(): string {
    return this.marca;
  }
}

const impresoraInalambrica = new ImpresoraInalambrica(
  'contabilidad',
  'eps2034',
  'epson',
  30
);
