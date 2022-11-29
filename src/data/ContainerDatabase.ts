import { Container } from "../model/containerTypes";
import { BaseDataBase } from "./BaseDatabase";

export class ContainerDatabase extends BaseDataBase {
    public createContainer = async (container: Container): Promise<void> => {
        try {
            await BaseDataBase.connection("container").insert({
                cliente: container.getCliente(),
                numero_container: container.getNumero_container(),
                tipo_container: container.getTipo_container(),
                status: container.getStatus(),
                categoria: container.getCategoria(),
                tipo_movimentacao: container.getTipo_movimentacao(),
                data_inicio: container.getData_inicio(),
                data_fim: container.getData_fim(),
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    public getContainerByUser = async (nome: string): Promise<any> => {
        try {
            const cliente = nome
            const container = await BaseDataBase.connection("container")
                .select("*")
                .where({ cliente })
            return container
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public getAll = async (): Promise<any> => {
        try {
            const AllDatas = await BaseDataBase.connection("container")
                .select("*");
            return AllDatas
        } catch (error: any) {
            throw new Error(error.message || error.message)
        }
    }
}