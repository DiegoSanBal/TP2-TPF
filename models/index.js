import User from "./User.js"
import Curso from "./Curso.js"
import Profesor from "./Profesor.js";

Curso.hasMany(User);
User.belongsTo(Curso);
Profesor.hasMany(User);
Profesor.hasOne(Curso);
Curso.belongsTo(Profesor)
User.hasMany(Curso);
Curso.belongsTo(User);

export {User, Curso, Profesor} ;