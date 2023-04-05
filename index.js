///importando dependências
import express  from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

///const para o express
const app = express();

///para o usar o modo json
app.use(express.json());
///cors para evitar conflitos localmente
app.use(cors());

///rota principal
app.use("/", userRoutes);

app.use ('/:nome', userRoutes)

///usarna porta 8800
app.listen(8800);
