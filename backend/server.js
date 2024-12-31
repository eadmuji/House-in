import express from 'express';
import dotenv from "dotenv";
import { connectdb } from './config/db.js';
import router from './routes/route.js';
import path from 'path'



dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express()
const __dirname = path.resolve();

app.use(express.json())

app.use("/api/rents", router)

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
        console.log(__dirname)
	});
}

app.listen(PORT, ()=>{
    connectdb();
}
)

//AjYmUC0WsVunr3wx