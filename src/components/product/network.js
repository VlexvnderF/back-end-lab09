import { Router } from "express";


import * as Controller from "./controller";


const ProductRouter = Router();

ProductRouter.get("/", Controller.findAll);
ProductRouter.get("/:id", Controller.findOne);
ProductRouter.post("/", Controller.create);
ProductRouter.put("/:id", Controller.update);
ProductRouter.delete("/:id", Controller.remove);

export default categoryRouter