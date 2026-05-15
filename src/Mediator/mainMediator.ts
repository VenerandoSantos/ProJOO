interface MediadorInterface {
    sendMs(texto: string): void;
    reciveMs(texto: string): void;
}

//classe mediadora
class MediadorConcreto {
    private mediadores: MediadorInterface[] = [];

    public adicionarMediadores(mediador: MediadorInterface): void {
        this.mediadores.push(mediador);
    } 

    public removerMediador(mediador: MediadorInterface): void {
        this.mediadores = this.mediadores.filter((o) => o !== mediador);
    }

    public sendMs(texto: string) {
        for (const mediador of this.mediadores) {
            mediador.reciveMs(texto );
        }
    }

    public reciveMs(texto: string){
        for (const mediador of this.mediadores){
            mediador.sendMs(texto);
        }
    }
}   

class Chat {
    public mediador: MediadorInterface | undefined;

    setMediador (m: MediadorInterface){
        this.mediador = m;
    }

}

class UsuarioChat extends Chat {
    private nomeUsuario :string;

    constructor(nomeUsuario:string){
        super();
        this.nomeUsuario = nomeUsuario;

    }
    public mandarMS(texto : string) {
        this.mediador!.sendMs(texto);
    }

    public receberMS(texto: string){
        this.mediador!.reciveMs(texto);
        console.log(`${this.nomeUsuario} Recebeu: ${texto}`)
    }

}

function teste() {

}

teste();
