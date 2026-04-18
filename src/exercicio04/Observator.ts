/*
Sujeito Rio


*/

interface Observador {
    atualizar(sujeito: sujeitoRio): void;
}

class sujeitoRio {
    private observadores: Observador[] = [];

    public adicionarObservador(observador: Observador): void {
        this.observadores.push(observador);
    } 

    public removerObservador(observador: Observador): void {
        this.observadores = this.observadores.filter((o) => o !== observador);
    }

    public notificarObservadores() {
        for (const observador of this.observadores) {
            observador.atualizar(this);
        }
    }
}   

class Rio extends sujeitoRio {
    private nivelAgua: number;
    private phAgua: number;
    private temperaturaAgua: number;
    
    constructor() {
        super();
        this.nivelAgua = 0;
        this.phAgua = 7;
        this.temperaturaAgua = 25;
    }

    get nivel(): number {
        return this.nivelAgua;
    }

    get ph(): number {
        return this.phAgua;
    }

    get temperatura(): number {
        return this.temperaturaAgua;
    }

    public atualizarNivelAgua(nivel: number): void {
        this.nivelAgua = nivel;
        this.notificarObservadores();
    }

    public atualizarPHAgua(ph: number): void {
        this.phAgua = ph;
        this.notificarObservadores();
    }

    public atualizarTemperaturaAgua(temperatura: number): void {
        this.temperaturaAgua = temperatura;
        this.notificarObservadores();
    }

}

class Universidade implements Observador {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }

    public atualizar(sujeito: sujeitoRio): void {
        if (sujeito instanceof Rio) {
            console.log(`Universidade ${this.name} recebeu atualização do rio: nivel ${sujeito.nivel} ph ${sujeito.ph} temperatura ${sujeito.temperatura}`);
        }
    }

}

function teste() {
    const RioSaoFrancisco = new Rio();
    const RioAmazonas = new Rio();
    const RioParana = new Rio();

    const UniversidadeFederal = new Universidade("UNIFESP");
    const UniversidadeEstadual = new Universidade("UNESP");
    

    RioSaoFrancisco.adicionarObservador(UniversidadeFederal);
    RioAmazonas.adicionarObservador(UniversidadeFederal);
    RioAmazonas.adicionarObservador(UniversidadeEstadual);
    RioParana.adicionarObservador(UniversidadeFederal);


    RioSaoFrancisco.atualizarNivelAgua(5);
    RioSaoFrancisco.atualizarPHAgua(6.5);
    RioSaoFrancisco.atualizarTemperaturaAgua(22);

    RioAmazonas.atualizarNivelAgua(10);
    RioAmazonas.atualizarPHAgua(7.2);
    RioAmazonas.atualizarTemperaturaAgua(28);

    RioParana.atualizarNivelAgua(3);
    RioParana.atualizarPHAgua(6.8);
    RioParana.atualizarTemperaturaAgua(20);


}

teste();