import User from "./User.js"
import Curso from "./Curso.js"
Curso.hasMany(User);
User.belongsTo(Curso);

export {User, Curso} ;