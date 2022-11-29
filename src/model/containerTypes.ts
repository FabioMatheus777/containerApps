export enum STATUS {
    CHEIO = "CHEIO",
    VAZIO = "VAZIO"
}

export enum CATEGORIA {
    IMPORTACAO = "IMPORTAÇÃO",
    EXPORTACAO = "EXPORTAÇÃO"
}

export enum TIPO_MOVIMENTACAO {
    EMBARQUE = "EMBARQUE",
    DESCARGA = "DESCARGA",
    GATEIN = "GATEIN",
    GATEOUT = "GATEOUT",
    REPOSICIONAMENTO = "REPOSICIONAMENTO",
    PESAGEM = "PESAGEM",
    SCANNER = "SCANNER"
}

export type ContainerInputDTO = {
    cliente: string;
    numero_container: string;
    tipo_container: string;
    status: STATUS,
    categoria: CATEGORIA,
    tipo_movimentacao: TIPO_MOVIMENTACAO,
    data_inicio: string,
    data_fim: string
}

export type getNameInputDTO = {
    nome: string
}


export class Container {
    constructor(
        protected cliente: string,
        protected numero_container: string,
        protected tipo_container: string,
        protected status: STATUS,
        protected categoria: CATEGORIA,
        protected tipo_movimentacao: TIPO_MOVIMENTACAO,
        protected data_inicio: string,
        protected data_fim: string
    ) { }
    public getCliente() {
        return this.cliente
    }
    public getNumero_container() {
        return this.numero_container
    }
    public getTipo_container() {
        return this.tipo_container
    }
    public getStatus() {
        return this.status
    }
    public getCategoria() {
        return this.categoria
    }
    public getTipo_movimentacao() {
        return this.tipo_movimentacao
    }
    public getData_inicio() {
        return this.data_inicio
    }
    public getData_fim() {
        return this.data_fim
    }
    static toContainerModel(data: any): Container {
        return new Container(
            data.cliente,
            data.numero_container,
            data.tipo_container,
            data.status,
            data.categoria,
            data.tipo_movimentacao,
            data.data_inicio,
            data.data_fim
        )
    }
}