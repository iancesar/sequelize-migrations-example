import db from "./database/models";
import "babel-polyfill";

async function app() {

    const user = db["user"];

    await user.create({ firstName: "John" });

    const users = await user.findAll();

    console.log(JSON.stringify(users, null, 4));
}

app();