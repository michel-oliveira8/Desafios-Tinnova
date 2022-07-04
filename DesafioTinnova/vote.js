class analiseDeVotos {
  constructor(total,validos, brancos, nulos) {
    this.total = total;
    this.validos = validos;
    this.brancos = brancos;
    this.nulos = nulos;
  }

  validosPercetual() {
    const validos = (this.validos / this.total) * 100
    return validos;
  }

  brancosPercentual() {
    const brancos = (this.brancos / this.total) * 100
    return brancos;
  }

  nulosPercentual() {
    const nulos = (this.nulos / this.total) * 100
    return nulos;
  }
}