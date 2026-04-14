//email
//sms
//push

interface canal {}
class email implements canal {}
class sms implements canal {}
class push implements canal {}

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

class teste {
    constructor () {
        console.log('teste')
    
    }
}

function main() {
    new teste();
}

main ();