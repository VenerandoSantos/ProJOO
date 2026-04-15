interface Canal {
    enviarMensagem(mensagem: string): void;
}
import { AdaptadorCanal ,Servicowhatsapp, ProxyValidacao, Validacao } from './exerciocio02';


class email implements Canal {
    public enviarMensagem (mensagem: string) {
        //enviar mensagem via email
        console.log('mensagem enviada via email.');
    }
}

class sms implements Canal {
    public enviarMensagem (mensagem: string) {
        //enviar mensagem via sms
        console.log('mensagem enviada via sms.');
    }
}

class push implements Canal {
    public enviarMensagem (mensagem: string) {
        //enviar mensagem via push
        console.log('mensagem enviada via push.');
    }
}

class canalFactory {
    criarCanal (tipo: string) {
        if (tipo === 'email') {
            return new email();
        } else if (tipo === 'sms') {
            return new sms();
        } else if (tipo === 'push') {
            return new push();
        } else {
            throw new Error('Tipo de canal desconhecido');
        }
    }
}

class configSingleton {
    private static instance: configSingleton;
    nomeAplicativo: string = 'Meu Aplicativo';
    servidorDeEnvio: string = 'smtp.meuapp.com';
    QuantidadeMaximaDeEnvios: number = 1000;
    
    private constructor () {    }
    
    public static getInstance (): configSingleton {
        if (!configSingleton.instance) {
            configSingleton.instance = new configSingleton();
        }
        return configSingleton.instance;
    }
}

function main () {

    const linha01: Canal = new canalFactory().criarCanal('email');
    const linha02: Canal = new canalFactory().criarCanal('sms');
    const linha03: Canal = new canalFactory().criarCanal('push');
    const linha04: Canal = new AdaptadorCanal(new Servicowhatsapp());

    
    linha01.enviarMensagem('Olá via email!');
    linha02.enviarMensagem('Olá via sms!');
    linha03.enviarMensagem('Olá via push!');    
    linha04.enviarMensagem('Olá via adaptador!');
    
    const usuario = 'pedro';
    let validador: ProxyValidacao;
    validador = new ProxyValidacao(new Validacao());
    let acesso : boolean = validador.validarAcesso(usuario);
}

main ();