import db from "./database/models";
import "babel-polyfill";

async function app() {

    const saco = db["saco"];

    await saco.create({ firstName: "John" });

    const users = await saco.findAll();

    console.log(JSON.stringify(users, null, 4));
}

app();