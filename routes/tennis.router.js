//Crear un enrutador de express en el que todas las rutas inician con api
const router = require('express').Router();
const {validatorHandler} = require('../middlewares/validator.handler');
const { getTenniSchema, createTenniSchema, updateTenniSchema } = require('../schemas/tennis.schema');
//Importar el controlador de tennios
const service = require('../services/tennis.service');

//Definir las rutas de la aplicación
router.get('/', async (req,res)=>{
    const tennis = await service.index()
    res.json(tennis);
});

router.get('/:id', 
    validatorHandler(getTenniSchema, 'params'), 
    async (req,res)=>{
        const id = req.params.id
        const tenni = await service.show(id)
        res.json(tenni)
    }
);

router.post('/', 
    validatorHandler(createTenniSchema, 'body'),
    async (req,res)=>{
        const body = req.body
        const tenni = await service.store(body)
        res.status(201).json(tenni)
    }
);

router.put('/:id', 
    validatorHandler(updateTenniSchema, 'body'),
    async (req,res)=>{
        const id = req.params.id
        const body = req.body
        const tenni = await service.update(id, body)
        res.json(tenni)
    }
);

router.delete('/:id', 
    validatorHandler(getTenniSchema, 'params'), 
    async (req,res)=>{
        const id = req.params.id
        const tenni = await service.destroy(id)
        res.json(tenni)
    }
);

//Exportar el enrutador
module.exports = router;