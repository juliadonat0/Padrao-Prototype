class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone() {
                return Object.assign({}, this);
    }

    represent() {
        return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
    }
}

class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
        super(modelo, marca, cor, numeroRodas);
        this.numeroPortas = numeroPortas;
    }

    clone() {
        const carroClone = super.clone();
        carroClone.numeroPortas = this.numeroPortas;
        return carroClone;
    }

    represent() {
        return `${super.represent()}, Portas: ${this.numeroPortas}`;
    }
}

class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, cilindradas) {
        super(modelo, marca, cor, numeroRodas);
        this.cilindradas = cilindradas;
    }

    clone() {
        const motoClone = super.clone();
        motoClone.cilindradas = this.cilindradas;
        return motoClone;
    }

    represent() {
        return `${super.represent()}, Cilindradas: ${this.cilindradas}`;
    }
}

class Aplicacao {
    static criarArrayDeVeiculos() {
        const veiculos = [];
        veiculos.push(new Carro("Sedan", "Toyota", "Prata", 4, 4));
        veiculos.push(new Moto("Esportiva", "Honda", "Vermelha", 2, 600));
        veiculos.push(new Carro("SUV", "Ford", "Azul", 4, 5));
        veiculos.push(new Moto("Custom", "Harley-Davidson", "Preto", 2, 1200));
        veiculos.push(new Carro("Hatchback", "Volkswagen", "Branco", 4, 3));
        veiculos.push(new Moto("Naked", "Kawasaki", "Verde", 2, 800));
        return veiculos;
    }

    static clonarVeiculos(veiculos) {
        const veiculosClonados = veiculos.map(veiculo => veiculo.clone());
        return veiculosClonados;
    }
}

const veiculos = Aplicacao.criarArrayDeVeiculos();
const veiculosClonados = Aplicacao.clonarVeiculos(veiculos);

veiculosClonados.forEach(veiculo => {
    console.log(veiculo.represent());
});