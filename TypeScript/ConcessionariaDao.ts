import {DaoInterface} from './DaoInterface'
import Concessionaria from './Concessionaria'
import { Dao } from './Dao'

export class ConcessionariaDao {
    nomeTabela: string = 'tb_concessionaria'

    inserir(objetc:Concessionaria): boolean {
        console.log('lógica de insert')
        return true
    }

    atualizar(object: Concessionaria): boolean {
        console.log('lógica update')
        return true
    }

    remover(id: number): Concessionaria {
        console.log('lógica delete')
        return new Concessionaria('', []);
    }

    slecionar(id:number): Concessionaria {
        console.log('lógica select')
        return new Concessionaria('', []);
    }

    selecionarTodos(): [any] {
        console.log('lógica getAll')
        return [new Concessionaria('',[])]
    }
}