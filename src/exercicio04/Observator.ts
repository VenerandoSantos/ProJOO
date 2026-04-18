/*
Sujeito Rio


*/

interface Observador {
    atualizar(dados: any): void;
}

class sujeitoRio {
    private observadores: Observador[] = [];

    public adicionarObservador(observador: Observador): void {
        this.observadores.push(observador);
    } 

    public removerObservador(observador: Observador): void {
        this.observadores = this.observadores.filter((o) => o !== observador);
    }

    protected notificarObservadores(dados: any) {
        for (const observador of this.observadores) {
            observador.atualizar(dados);
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

    public atualizarNivelAgua(nivel: number): void {
        this.nivelAgua = nivel;
        this.notificarObservadores(this.getStatus());
    }

    public atualizarPHAgua(ph: number): void {
        this.phAgua = ph;
        this.notificarObservadores(this.getStatus());
    }

    public atualizarTemperaturaAgua(temperatura: number): void {
        this.temperaturaAgua = temperatura;
        this.notificarObservadores(this.getStatus());
    }

    private getStatus(): any {
        return {
            nivel: this.nivelAgua,
            ph: this.phAgua,
            temperatura: this.temperaturaAgua
        };
    }

}

class Universidade implements Observador {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }

    public atualizar(dados: any): void {
        console.log(`Universidade ${this.name} recebeu atualização:`, dados);  
    }
}

function main() {
    const RioSaoFrancisco = new Rio();
    const UniversidadeFederal = new Universidade("UNIFESP");
    RioSaoFrancisco.adicionarObservador(UniversidadeFederal);

    RioSaoFrancisco.atualizarNivelAgua(5);
    RioSaoFrancisco.atualizarPHAgua(6.5);
    RioSaoFrancisco.atualizarTemperaturaAgua(22);

}

main();