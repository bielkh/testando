///importando o db
import { db } from "../db.js";

///exportando o getUsers
export const getUsers = (_, res) => {

    ///const de query para pegar do campo usuarios no banco de dados
    const q = "SELECT * FROM usuarios";
    
    ///função para puxar do banco de dados
    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};


export const addUser = (req, res) => {
    const q = "INSERT INTO usuarios(`nome`,`email`,`fone`,`pedido`) VALUES(?)";


    const values =  [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.pedido,
    ];

    db.query (q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("usuario criado com sucesso.")
    });
};

export const updateUser = (req, res) => {
    const q = 
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `pedido` = ? WHERE `id` = ?";

    const values =  [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.pedido,
    ];
    db.query (q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("usuario atualizado com sucesso.")
    });
};

export const deleteUser = (req, res) => {
    const q = 
    "DELETE FROM usuarios WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("usuario deletado com sucesso")
    });
};