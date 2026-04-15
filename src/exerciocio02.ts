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