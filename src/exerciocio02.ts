interface Canal {
    enviarMensagem(mensagem: string): void;
}

//Adapter
//Integrar serviços externos ou legados com interfaces incompatíveis.
//Exemplo: Adaptar uma API externa de SMS
//incompatível com o método send().

export class Servicowhatsapp { //simulando serviço externo
    public mandarSMS (texto: string){
        //enviar mensagem via whatsapp
    }
}

export class AdaptadorCanal implements Canal {
    private servico: Servicowhatsapp;

    constructor( servico: Servicowhatsapp ) {
        this.servico = servico;
    }

    public enviarMensagem (mensagem: string) {
        //enviar mensagem
        this.servico.mandarSMS(mensagem);
        console.log('mensagem enviada via adaptador: ');
    }
}

//Proxy
//Intermediar acesso, adicionando controle,
//validação e logs.
//Exemplo: Validar permissões, registrar logs e limitar
//tentativas de envio.

interface acesso {
    validarAcesso (usuario: string): boolean;
}

export class Validacao implements acesso {
    public validarAcesso (usuario: string): boolean {
        //validar acesso do usuário
        console.log('Acesso validado via base')
        return true;
    }
    
}

export class ProxyValidacao implements Validacao {
    public acesso: boolean;
    private base: Validacao;

    constructor (base: Validacao) {
        this.base = base;
        this.acesso = false;
    }

    public validarAcesso (usuario: string): boolean {
        //validar acesso do usuário
        console.log('Validando acesso via proxy...');
        if (usuario === 'pedro') {
            console.log('Acesso validado via proxy.');
            this.acesso = true;
        } else {
            console.log('proxy nao encontrou usuario.');
            this.acesso = this.base.validarAcesso(usuario);
        }
        console.log('saindo do proxy...');
        return this.acesso;

    }

}

