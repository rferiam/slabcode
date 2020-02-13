export interface Eje {
  id: number;
  puntosApoyo: any;
  libre: boolean;
  traccion: boolean;
  direccional: boolean;
  retractil: boolean;
}

export interface Config {
  n: number;
  ejes: Eje[];
}
