export interface DaoInterface<T> {
    nomeTabela: string

    inserir(objetc:T): boolean
    atualizar(object: T): boolean
    remover(id: number): T
    slecionar(id:number): T
    selecionarTodos(): [T]
}