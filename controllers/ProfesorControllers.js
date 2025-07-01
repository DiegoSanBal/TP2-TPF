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

        try {

            const { id } = req.params;
            if (!id || isNan(id)) {
                return res.status(400).send({ succes: false, message: error.message })
            }
            const profesor = await this.profesorServices.getProfesorServicesById(id);
            res.status(200).send({
                success: true,
                message: profesor,
            });
        }
        catch (err) {
            res.status(404).send({
                success: false,
                message: err.message,
            })
        }
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
    updateProfesorControllers = async (req, res) => {
        const { id } = req.params;
        const { name } = req.body;
        try {
            if (!id || isNan(id)) {
                return res.status(400).send({ succes: false, message: error.message })
            }
            const updatedProfesor = await this.profesorServices.updateProfesorServices(id, name);
            res.status(200).send({
                success: true,
                message: "Profesor updated",
                data: updatedProfesor,
            })
        } catch {
            res.status(404).send({
                success: false,
                message: error.message,
            })
        }
    }
    deleteProfesorController = async (req, res) => {
        try {
            const { id } = req.params;
              if (!id || isNan(id)) {
                return res.status(400).send({ succes: false, message: error.message })
            }
            const result = await this.profesorServices.deleteProfesorServices(id);
            res.status(200).send({
                succes: true,
                message: result,
            })
        } catch (error) {
            res.status(400).send({
                succes: false,
                message: error.message,
            })

        }
    };

}

export default ProfesorControllers;