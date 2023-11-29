import express from "express";
import ViteExpress from "vite-express";
import {config} from "dotenv";
import pg from "pg";

const {Pool} = pg;
const PORT = process.env.PORT ?? 3000;

config();
const pool = new Pool({
    // eslint-disable-next-line no-undef
    connectionString: process.env.DATABASE_URL, ssl: {
        rejectUnauthorized: false
    }
})

async function init() {
    const app = express();

    app.use(express.json());

    app.get("/api", async (req, res) => {
        const client = await pool.connect();
        try {
            const result = await client.query(req.query.query);
            res.status(200).json({
                status: "ok", content: result.rows
            }).end();
            await client.end();
        } catch (e) {
            res.status(400).send(e);
        }
    })

    app.post("/api/users", async (req, res) => {
        const client = await pool.connect();
        try {
            const result = await client.query("INSERT INTO users (username, email, created_on) VALUES ($1, $2, NOW())", [req.body.username, req.body.email])
            res.status(201).send(result).end();
            client.end();
        } catch (e) {
            res.status(400).send(e);
            client.end();
        }
    })

    ViteExpress.listen(app, PORT, () => {
        console.log("listening on port " +  PORT)
    })
}

init();