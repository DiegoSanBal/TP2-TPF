import { DataTypes, Model } from 'sequelize';
import connections from "../connections/connections.js";

class User extends Model {}

User.init(
    {
        name: DataTypes.STRING(50),
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                len: [6, 100],
            },
        },
    },
    {
        sequelize: connections,
        modelName: 'User',
    }
    );

    export default User;