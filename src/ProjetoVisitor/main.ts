/* 
# 6 classes de arquivos Diferentes
- html
- exel
- doc
- word
- powerBI
- pdf

cada um podera gerar um outro tipo de arquivo
gerarPDF()
gerarHTML()


*/

interface Visitor {
    visit(arq: Html) :void ;
}

abstract class Arquivos {
    private texto :string;

    constructor (texto:string){
        this.texto = texto;
    }

    get getTexto (){
        return this.texto
    }

    aceept (visita: Visitor){}
}

class Html extends Arquivos {

    impressao () {
        console.log ("oi, eu sou um HTML.\n");
    }

    accept (visitor:Visitor){
        visitor.visit(this);
    }
}


/* Classe Visitante */
class ConvertArquivoPDFVisitor implements Visitor {
    public visit (arq: Html){
        console.log ("arquivo HTML Convertido para PDF")
    }

}

function teste () {
    console.log ("hello world")
}

teste ();
