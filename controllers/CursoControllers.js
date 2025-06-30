import CursoServices from "../services/CursoServices.js";

class CursoControllers {
    cursoServices = new CursoServices();

    getAllCursosControllers = async (req, res) => {
        const cursos = await this.cursoServices.getAllCursosServices();
        res.status(200).json({
            success: true,
            message: cursos,
        });
    };
    getCursoByIdControllers = async (req, res) => {
        const { id } = req.params;
        const curso = await this.cursoServices.getCursoServiceById(id);
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
    updateCursoControllers = async (req, res) => {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;
        try {
            const curso = await this.cursoServices.updateCursoServices(id, {
                nombre,
                descripcion,
            });
            res.status(200).json({
            success: true,
            message: curso,
            });
        } catch (error) {
            {
        res.status(400).json({
            success: false,
            message: error.message,
        });
        
    };
        }
    };
    deleteCursoControllers = async (req, res) =>{
        const { id } = req.params;
        try {
            const curso = await this.cursoServices.deleteCursoServices(id);
            res.status(200).json({
                success: true,
                message: curso,
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    }
}

export default CursoControllers;