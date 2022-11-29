import { CategorySharp } from "@material-ui/icons";
import { ContainerDatabase } from "../data/ContainerDatabase";
import { CustomError } from "../error/customError";
import { Container, ContainerInputDTO, getNameInputDTO } from "../model/containerTypes";

export class ContainerBussiness {
    constructor(private containerDatabase: ContainerDatabase) { }
    public createContainer = async (input: ContainerInputDTO) => {
        try {
            const { cliente,
                numero_container,
                tipo_container,
                status,
                categoria,
                tipo_movimentacao,
                data_inicio,
                data_fim } = input

            if (!cliente || !numero_container || !tipo_container || !status ||
                !categoria || !tipo_movimentacao || !data_inicio || !data_fim) {
                throw new CustomError(400, "preencha todos os campos corretamente")
            }

            const regex = /[0-9]/;
            // (numero_container.includes("1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "0"))
            if (regex.test(numero_container) == false) {
                throw new CustomError(400, "numero container deve conter letras e numeros.")
            }

            if (!data_inicio) {
                throw new CustomError(404, "insira a data de inicio.")
            }

            if (!data_fim) {
                throw new CustomError(404, "insira a data final.")
            }


            const newContainer = new Container(cliente,
                numero_container,
                tipo_container,
                status,
                categoria,
                tipo_movimentacao,
                data_inicio,
                data_fim)

            await this.containerDatabase.createContainer(newContainer)

            return newContainer;
        } catch (error: any) {
            throw new Error(error.message)
        }
    };

    public getContainerByName = async (ClienteInput: string) => {
        try {

            if (!ClienteInput) {
                throw new CustomError(404, "insira um nome válido")
            }

            const cliente = await this.containerDatabase.getContainerByUser(ClienteInput);
            return cliente
        } catch (error: any) {
            throw new Error(error.message)
        }
    };

    public getRelatorio = async (ClienteInput: string) => {
        try {

            if (!ClienteInput) {
                throw new CustomError(404, "insira um nome válido")
            }

            const cliente = await this.containerDatabase.getContainerByUser(ClienteInput);
            return cliente
        } catch (error: any) {
            throw new Error(error.message)
        }
    };



    public getAll = async () => {
        try {
            const all = await this.containerDatabase.getAll();
            return all
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}