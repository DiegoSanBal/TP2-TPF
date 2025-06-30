import { DataTypes, Model } from "sequelize";
import connections from "../connections/connections.js";
import bcrypt from "bcrypt";

class Profesor extends Model {}

Profesor.init(
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
    modelName: "Profesor",
    timestamps: false,
    sequelize: connections,
  }
);

Profesor.beforeCreate(async (profesor) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(profesor.password, salt);
  profesor.password = hash;
});

export default Profesor;
