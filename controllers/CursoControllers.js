import CursoServices from "../services/CursoServices.js";

class CursoControllers {
    cursoServices = new CursoServices();

    getAllCursosControllers = async (req, res) => {
        const cursos = await this.cursoServices.getAllCursosServices();
        res.status(200).json({
            success: true,
            message: curso,
        });
    };
    getCursoByIdControllers = async (req, res) => {
        const { id } = req.params;
        const curso = this.cursoServices.getCursoServiceById(id);
        res.status(200).json({
            success: true,
            message: curso,
        });
    };
    createCursoControllers = async (req, res) => {
        try {
            const {nombre, descripcion} = req.body;
            const curso = await this.cursoServices.createCursoServices({
                nombre,
                descripcion,
            });
            res.status(200).json({
            success: true,
            message: curso,
            });
        } catch (error) {
            res.status(400).send({
                success: false,
                message: error.message,
            });
        }
    };
    updateCursoControllers(req, res) {
        res.status(200).send("updateCursoControllers");
    }
    deleteCursoControllers(req, res) {
        res.status(200).send("deleteCursoControllers");
    }
}

export default CursoControllers;