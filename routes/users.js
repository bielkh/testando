///importando o express
import express from "express";
///importando o controlller de user
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/user.js";



///const router para usar como rota
const router = express.Router();

///rotas de metodo https
router.get("/", getUsers);   

router.get("/:nome", getUsers);   

router.post("/", addUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);


///exportando a rota
export  default router;
