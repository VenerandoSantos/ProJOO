/*
Uma cafeteria deseja desenvolver um sistema para montagem de bebidas personalizadas. O cliente pode pedir uma bebida base,
como café expresso, cappuccino ou chá, e adicionar complementos como leite, chantilly, canela e calda de chocolate.
Como diferentes combinações são possíveis, criar uma classe para cada variação tornaria o sistema rígido e difícil de manter.

Resultado esperado
"O cliente deve poder montar bebidas
personalizadas de forma dinâmica, combinando
adicionais em tempo de execução, sem explosão no
número de classes."

Objetivo
Implementar uma solução orientada a objetos que:
[X]utilize o padrão Decorator para adicionar responsabilidades dinamicamente;
[X]permita combinar múltiplos adicionais sem alterar as classes base;
[X]calcule corretamente a descrição final e seu custo total;
[X]demonstre flexibilidade e extensibilidade na composição.
*/

//interface que o decorator e as bebidas base implementam
interface Bebida {
    valor (numero: number) : number;
    descricao (): string;
}

// Bebidas base
class CafeExpresso implements Bebida {
    public valor (numero: number) : number {
        return 5;
    }
    public descricao (): string {
        return 'Café Expresso';
    }
}

class Cappuccino implements Bebida {
    public valor (numero: number) : number {
        return 7;
    }
    public descricao (): string {
        return 'Cappuccino';
    }
}

class Cha implements Bebida {
    public valor (numero: number) : number {
        return 4;
    }
    public descricao (): string {
        return 'Chá';
    }
}

// Decorator
class CafeteriaDecorator implements Bebida {
    private bebida: Bebida;

    constructor (bebida: Bebida) {
        this.bebida = bebida;
    }
    
    public valor (numero: number) : number {
        return this.bebida.valor(numero);
    }

    public descricao (): string {
        return this.bebida.descricao();
    }
}

//complementos
class Leite extends CafeteriaDecorator {

    constructor (bebida: Bebida) {
        super(bebida);
    }

    public valor (numero: number): number {
        return super.valor(numero) + 1;
    }
    public descricao (): string {
        const m: string = super.descricao();
        return m + ' com leite';
    }
}

class Chantilly extends CafeteriaDecorator {
    preco: number;
    constructor (bebida: Bebida) {
        super(bebida);
        this.preco = 3;
    }

    public valor (numero: number): number {
        return super.valor(numero) + this.preco;
    }
    public descricao (): string {
        const m: string = super.descricao();
        return m + ' com chantilly';
    }
}

class Canela extends CafeteriaDecorator {

    constructor (bebida: Bebida) {
        super(bebida);
    }

    public valor (numero: number): number {
        return super.valor(numero) + 5;
    }

    public descricao(): string {
        const m: string = super.descricao();
        return m + ' com canela';
    }
}

class CaldaChocolate extends CafeteriaDecorator {

    constructor (bebida: Bebida) {
        super(bebida);
    }

    public valor (numero: number): number {
        return super.valor(numero) + 2;
    }

    public descricao (): string {
        const m: string = super.descricao();
        return m + ' com calda de chocolate';
    }

}

function main () {
    let bebida: Bebida;

    bebida = new Leite (new CaldaChocolate(new CafeExpresso()));
    console.log(bebida.descricao() + ': $' + bebida.valor(0).toFixed(2));

    bebida = new Chantilly(new Canela(new Cappuccino()));
    console.log(bebida.descricao() + ': $' + bebida.valor(0).toFixed(2));

    bebida = new CaldaChocolate(new Leite(new Cha()));
    console.log(bebida.descricao() + ': $' + bebida.valor(0).toFixed(2));


}

main();