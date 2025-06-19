import { DataTypes, Model } from 'sequelize';
import connections from "../connections/connections.js";
import Curso from './Curso.js';
import bcrypt from "bcrypt";

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

    User.beforeCreate(async (user)=> {
        const salt = await bcrypt.genSalt(10);
        console.log(salt);
        const hash = await bcrypt.hash(user.password, salt);
        console.log(hash);
        user.password=hash;
    });

    export default User;