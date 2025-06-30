import User from "./User.js";
import Curso from "./Curso.js";
import Profesor from "./Profesor.js";

Curso.belongsToMany(User, { through: "UserCurso" });
User.belongsToMany(Curso, { through: "UserCurso" });

Curso.hasMany(Profesor);
Profesor.belongsTo(Curso);

export { User, Curso, Profesor };
