import { Sequelize } from 'sequelize';

const connection = new Sequelize("miercoles", "root", "root", {
    host: "localhost",
    dialect: "postgres",
    port: 5432, //3306 para zamp // 1433 para sqlserver
});

export const testConnection = async () => {
    try {
        await connection.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}
export default connection;