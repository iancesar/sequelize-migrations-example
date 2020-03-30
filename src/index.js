import express from "express";
import db from './database/models';
import 'babel-polyfill'

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({ running: "true" });
});

app.listen(port, async () => {

    console.log(`express is running on ${port}`);

    const saco = db['saco'];

    await saco.create({ firstName: "John" });

    const users = await saco.findAll();

    console.log(JSON.stringify(users, null, 4))

});