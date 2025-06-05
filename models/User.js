import sequelize, {DataTypes, Model} from 'sequelize';
import connection from '../config/database.js';

class Users extends Model {}

Users.init(
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
        sequelize: connection,
        modelName: 'User',
    }
    );