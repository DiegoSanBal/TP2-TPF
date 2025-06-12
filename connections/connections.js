import { Sequelize } from 'sequelize';

const connections = new Sequelize("miercoles", "root", "root", {
    host: "localhost",
    dialect: "postgres",
    port: 8889, //3306 para zamp // 1433 para sqlserver
});

export const testConnection = async () => {
    try {
        await connections.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}
export default connections;