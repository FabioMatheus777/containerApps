import { Request, Response } from "express";
import { ContainerBussiness } from "../bussiness/ContainerBussiness";
import { ContainerInputDTO, getNameInputDTO } from "../model/containerTypes";

export class ContainerController {
    constructor(private containerBussiness: ContainerBussiness) { }
    public createContainer = async (req: Request, res: Response) => {
        try {
            const { cliente,
                numero_container,
                tipo_container,
                status,
                categoria,
                tipo_movimentacao,
                data_inicio,
                data_fim } = req.body;

            const input: ContainerInputDTO = {
                cliente,
                numero_container,
                tipo_container,
                status,
                categoria,
                tipo_movimentacao,
                data_inicio,
                data_fim
            };

            const newContainer = await this.containerBussiness.createContainer(input)

            res.status(201).send({ message: "informações salvas com sucesso!", newContainer })
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    };
    public getContainerByName = async (req: Request, res: Response) => {
        try {
            const nome = req.params.id

            const cliente = await this.containerBussiness.getContainerByName(nome)
            res.status(200).send({ cliente })
        } catch (error: any) {
            throw new Error(error.message)
        }
    };

    public getRelatorio = async (req: Request, res: Response) => {
        try {
            const nome = req.params.id

            const cliente = await this.containerBussiness.getContainerByName(nome)

            const all = await this.containerBussiness.getAll()

            const tudo = all.map((item: any) => {
                return item.tipo_movimentacao
            })

            let movimentacao = cliente[0].tipo_movimentacao

            let pessoa = cliente[0].cliente

            const RelatorioMSG = `O cliente ${pessoa} fez a movimentação ${movimentacao} com um total de ${tudo.length} importações/exportações`

            res.status(200).send({ RelatorioMSG })
        } catch (error: any) {
            throw new Error(error.message)
        }
    };

    public getAll = async (req: Request, res: Response) => {
        try {
            const all = await this.containerBussiness.getAll()
            res.status(200).send({ all })
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}