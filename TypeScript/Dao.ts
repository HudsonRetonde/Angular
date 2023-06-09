import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T> {
    nomeTabela: string = ''

    inserir(objetc:T): boolean {
        console.log('lógica de insert')
        return true
    }

    atualizar(object: T): boolean {
        console.log('lógica update')
        return true
    }

    remover(id: number): T {
        console.log('lógica delete')
        return Object();
    }

    slecionar(id:number): T {
        console.log('lógica select')
        return Object();
    }

    selecionarTodos(): [T] {
        console.log('lógica getAll')
        return [Object()]
    }
}