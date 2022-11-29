import { ContainerBussiness } from "./bussiness/ContainerBussiness";
import { app } from "./controller/app";
import { ContainerController } from "./controller/ContainerController";
import { ContainerDatabase } from "./data/ContainerDatabase";

const containerBussiness = new ContainerBussiness(
    new ContainerDatabase()
);


const containerController = new ContainerController(containerBussiness)

app.post("/container", containerController.createContainer)
app.get("/user/:id", containerController.getContainerByName)
app.get("/users/all", containerController.getAll)
app.get("/relatorio/:id", containerController.getRelatorio) 