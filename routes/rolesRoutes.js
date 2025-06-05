import { Router } from 'express';

const rolesRoutes = Router();

rolesRoutes.get('/', (req, res) => {
    res.status(200).send('Get all roles routes');

})
rolesRoutes.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send(`Get role by id: ${id}`);
});
rolesRoutes.post('/', (req, res) => {
    const { name } = req.body;
    res.status(201).send(`Role ${name} created`);
});
rolesRoutes.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    res.status(200).send(`Role ${name} updated with id: ${id}`);
});
rolesRoutes.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send(`Role with id: ${id} deleted`);
});
export default rolesRoutes;