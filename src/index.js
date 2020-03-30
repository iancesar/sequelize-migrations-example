import { user } from "./database/models";
import "babel-polyfill";

async function app() {

    await user.create({ firstName: "John 2" });

    const users = await user.findAll();

    console.log(JSON.stringify(users, null, 4));
}

app();