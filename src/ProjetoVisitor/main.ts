/**
 * PADRÃO VISITOR - Simulação de Conversão de Arquivos
 * Permite converter qualquer formato de arquivo para qualquer outro
 * Sem modificar as classes de arquivo
 */
interface Visitor {
    visitHtml(arq: Html):any;
    visitExcel(arq: Excel):any;
    visitDoc(arq: Doc):any;
    visitWord(arq: Word):any;
    visitPowerBI(arq: PowerBI):any;
    visitPdf(arq: Pdf):any;
}

abstract class Arquivo {
    protected texto: string;

    constructor(texto: string) {
        this.texto = texto;
  
    }

    getTexto(): string {
        return this.texto;
    }

    abstract accept(visitor: Visitor): string;
    abstract impressao(): void;
}

class Html extends Arquivo {
    constructor(texto: string) {
        super(texto);
    }

    accept(visitor: Visitor): string {
        return visitor.visitHtml(this);
    }

    impressao(): void {
        console.log(`Conteúdo:\n${this.texto}\n`);
    }
}

class Excel extends Arquivo {
    constructor(texto: string) {
        super(texto) ;
    }

    accept(visitor: Visitor): string {
        return visitor.visitExcel(this);
    }

    impressao(): void {
        console.log(`Conteúdo:\n${this.texto}\n`);
    }
}

class Doc extends Arquivo {
    constructor(texto: string) {
        super(texto);
    }

    accept(visitor: Visitor): string {
        return visitor.visitDoc(this);
    }

    impressao(): void {
        console.log(`Conteúdo:\n${this.texto}\n`);
    }
}

class Word extends Arquivo {
    constructor(texto: string) {
        super(texto);
    }

    accept(visitor: Visitor): string {
        return visitor.visitWord(this);
    }

    impressao(): void {
        console.log(`Conteúdo:\n${this.texto}\n`);
    }
}

class PowerBI extends Arquivo {
    constructor(texto: string) {
        super(texto);
    }

    accept(visitor: Visitor): string {
        return visitor.visitPowerBI(this);
    }

    impressao(): void {
        console.log(`Conteúdo:\n${this.texto}\n`);
    }
}

class Pdf extends Arquivo {
    constructor(texto: string) {
        super(texto);
    }

    accept(visitor: Visitor): string {
        return visitor.visitPdf(this);
    }

    impressao(): void {
        console.log(`Conteúdo:\n${this.texto}\n`);
    }
}

class ConvertPdfVisitor implements Visitor {
    visitHtml(arq: Html){
        console.log(`html convertido paraPDF!`);
        return;
    }

    visitExcel(arq: Excel){
        console.log(`exel convertido paraPDF!`);
        return;
    }

    visitDoc(arq: Doc){
        console.log(`doc convertido paraPDF!`);
        return;
    }

    visitWord(arq: Word){
        console.log(`word convertido paraPDF!`);
        return ;
    }

    visitPowerBI(arq: PowerBI){
        console.log(`PowerBi convertido paraPDF!`);
        return ;
    }

    visitPdf(arq: Pdf){
        console.log(`PDF ja esta em PDF!`);
        return ;
    }
}

class ConvertHtmlVisitor implements Visitor {
    visitHtml(arq: Html){
        console.log(`HTML ja esta em HTML!`);
        return ;
    }

    visitExcel(arq: Excel){
        console.log(`Excel convertido para HTML!`);
        return ;
    }

    visitDoc(arq: Doc){
        console.log(`Html convertido para  Doc!`);
        return ;
    }

    visitWord(arq: Word) {
        console.log(`Html convertido para  Word!`);
        return ;
    }

    visitPowerBI(arq: PowerBI) {
        console.log(`Html convertido para  PowerBI!`);
        return ;
    }

    visitPdf(arq: Pdf) {
        console.log(`Html convertido para  Pdf!`);
        return ;
    }
}

class ConvertExcelVisitor implements Visitor {
    visitHtml(arq: Html) {
        console.log(`Exel convertido para  Html!`);
        return ;
    }

    visitExcel(arq: Excel){
        console.log(`Excel ja esta em Excel!`);
        return ;
    }

    visitDoc(arq: Doc) {
        console.log(`Exel convertido para  Html!`);
        return ;
    }

    visitWord(arq: Word){
        console.log(`Exel convertido para  Html!`);
        return ;
    }

    visitPowerBI(arq: PowerBI) {
        console.log(`Exel convertido para  Html!`);
        return ;
    }

    visitPdf(arq: Pdf) {
        console.log(`Exel convertido para  Html!`);
        return ;
    }
}

class ConvertWordVisitor implements Visitor {
    visitHtml(arq: Html) {
        console.log(`Exel convertido para  Html!`);
        return ;
    }

    visitExcel(arq: Excel) {
        console.log(`Exel convertido para  Html!`);
        return ;
    }

    visitDoc(arq: Doc) {
        console.log(`Exel convertido para  Html!`);
        return ;
    }

    visitWord(arq: Word) {
        console.log(`Exel convertido para  Html!`);
        return arq.getTexto();
    }

    visitPowerBI(arq: PowerBI) {
        console.log(`Exel convertido para  Html!`);
        return ;
    }

    visitPdf(arq: Pdf) {
        console.log(`Exel convertido para  Html!`);
        return ;
    }
}

function teste () {
    console.log("=== Teste Padrão Visitor ===\n");
    
    console.log("Convertendo HTML para Excel:");
    const html = new Html(`testinho`);
    html.accept(new ConvertExcelVisitor());
    
    console.log("\nConvertendo Excel para HTML:");
    const excel = new Excel(`dados financeiros`);
    excel.accept(new ConvertHtmlVisitor());
    
    console.log("\nConvertendo Word para PDF:");
    const word = new Word(`documento importante`);
    word.accept(new ConvertPdfVisitor());
    
    console.log("\nTeste concluido com sucesso!");
}

teste();