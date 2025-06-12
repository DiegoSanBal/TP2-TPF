import { DataTypes, Model } from 'sequelize';
import connections from "../connections/connections.js";

class Curso extends Model {}

Curso.init(
    {
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
    },  {
        modelName: 'Curso',
        timestamps: false,
        sequelize: connections,

    } 
);

export default Curso;