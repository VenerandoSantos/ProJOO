//Exercício prático: Padrão Facade em um Home Theater

/*Uma empresa deseja desenvolver um sistema para controlar um Home Theater composto por vários equipamentos, como TV,
projetor, receiver, player de mídia, sistema de som e luz ambiente.
Atualmente, o uso é complexo e pouco prático, pois o usuário precisa ligar e configurar cada dispositivo separadamente.


Objetivo
Implementar uma solução orientada a objetos que:
Utilize o padrão Facade para uma interface simples;
Encapsule a complexidade de
Ofereça operações: assistirFilme(), ouvirMusica();
Demonstre redução de acoplamento com os
subsistemas.
Resultado esperado

"O cliente deve interagir apenas com a fachada,
enquanto ela coordena os dispositivos internos e
simplifica o uso do sistema."*/



//TV, pojetor, receiver, player de mídia, sistema de som e luz ambiente.
class Tv {
    public state : boolean = false

    public ligar () {
        if (!this.state) {
            this.state = true
        }
    }

    public desligar () {
        if (this.state) {
            this.state = false
        }
    }

}

class SistemaDeSom {
    state: boolean = false;
    volume: number = 50;

    public ligar () {
        if (!this.state) {
            this.state = true;
        }   
    }

    public desligar () {
        if (this.state) {   
            this.state = false;
        }
    }

    public ajustarVolume (volume: number) {
        //ajustar volume
        this.volume = volume;
    }

}

class Receiver  {
    private caixaDeSom: SistemaDeSom;
    private tv : Tv;

    constructor (caixaDeSom: SistemaDeSom, tv: Tv) {
        this.caixaDeSom = caixaDeSom;
        this.tv = tv;
    }

    public sincronizaTVeAudio () {
        //simulaçao de sincronização entre TV e sistema de som
        console.log('TV e sistema de som sincronizados');        
    }

}

class PlayerDeMidia {
    state: boolean = false;    

    public ligar () {
        if (!this.state) {
            this.state = true;
        }
    }

    public desligar () {
        if (this.state) {
            this.state = false;
        }
    }

    public reproduzir (arquivo: string) {
        //reproduzir mídia
        this.ligar();
        console.log('Reproduzindo mídia ' + arquivo );
    }

}


class LuzAmbiente {
    intencidade: number = 0;
    public ajustarLuz (intencidade: number) {
        //ajustar intensidade da luz
        this.intencidade = intencidade;
    }
    public ligar () {
        this.ajustarLuz(100);
    }
    public desligar () {
        this.ajustarLuz(0);
    }
}

class Facade {
    private tv: Tv;
    private receiver: Receiver;
    private playerDeMidia: PlayerDeMidia;
    private sistemaDeSom: SistemaDeSom;
    private luzAmbiente: LuzAmbiente;

    constructor () {
        this.tv = new Tv();

        this.sistemaDeSom = new SistemaDeSom();
        this.receiver = new Receiver(this.sistemaDeSom, this.tv);
        this.playerDeMidia = new PlayerDeMidia();
        this.luzAmbiente = new LuzAmbiente();
    }

    public assistirFilme(arquivo: string){
        this.tv.ligar();
        this.sistemaDeSom.ligar();
        this.receiver.sincronizaTVeAudio();
        this.luzAmbiente.ajustarLuz(20);             
        this.playerDeMidia.reproduzir(arquivo);
    }

    public ouvirMusica(arquivo: string) {
        this.tv.ligar();
        this.sistemaDeSom.ligar();
        this.receiver.sincronizaTVeAudio();
        this.playerDeMidia.reproduzir(arquivo);
    }

    public desligarTudo () {
        this.tv.desligar();
        this.sistemaDeSom.desligar();
        this.playerDeMidia.desligar();
        this.luzAmbiente.desligar();
    }
}

function main () {
    const homeTheater = new Facade();
    homeTheater.assistirFilme("filme.mp4");
    homeTheater.ouvirMusica("musica.mp3");
    homeTheater.desligarTudo();

}

main();