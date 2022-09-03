"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const porta = process.env.PORT || 3000;
const server = app_1.app.listen(porta, () => {
    console.log(`App ouvindo na pota: ${porta}`);
});
process.on("SIGINT", () => {
    server.close();
    console.log("App finalizado!");
});
