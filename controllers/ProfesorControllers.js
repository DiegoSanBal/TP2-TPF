import ProfesorServices from '../services/ProfesorServices.js';

class ProfesorControllers {
    profesorServices = new ProfesorServices();

    getAllProfesorsControllers = async (req, res) => {
        const profesors = await this.profesorServices.getAllProfesorsServices();
        res.status(200).json({
            success: true,
            message: profesors,
        });
    };
    getProfesorByIdControllers = async (req, res) => {
        const { id } = req.params;
        const profesor = this.profesorServices.getProfesorServicesById(id);
        res.status(200).send({
            success: true,
            message: profesor,
        });
    };
    createProfesorControllers = async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const profesor = await this.profesorServices.createProfesorServices({
                name,
                email,
                password,
            });
            res.status(200).send({
                success: true,
                message: profesor,
            });
        } catch (error) {
            res.status(400).send({
                success: false,
                message: error.message,
            });
        }
    };
    updateProfesorControllers(req, res) {
        res.status(200).send("updateProfesorControllers");
    }
    deleteProfesorController(req, res) {
        res.status(200).send("deleteProfesorController");
    }
}

export default ProfesorControllers;