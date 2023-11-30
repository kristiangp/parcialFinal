const {models} = require('../libs/sequelize');
const transporter = require('../nodemailer.config'); 
const {
    createTenniSchema,
    updateTenniSchema,
    getTenniSchema
} = require('../schemas/tennis.schema');

//Funcion para listar todos los tennios
async function index() {
    const tennis = await models.tenni.findAll();
    return tennis;
}

//Funcion para crear un nuevo tennio
async function store(body) {
    try {
        const { error } = createTenniSchema.validate(body);
        if (error) {
            throw new Error(error.details.map((err) => err.message).join(', '));
        }

        const tenni = await models.tenni.create(body);

        await transporter.sendMail({
            from: 'sandbox.smtp.mailtrap.io',
            to: 'b308585168-df43de@inbox.mailtrap.io',
            subject: 'Nuevo registro creado',
            text: 'Se ha creado un nuevo registro en tu aplicación.'
        });

        console.log('Correo electrónico enviado después de crear un nuevo registro');
        return tenni; 
    } catch (error) {
        console.error('Error al crear el registro o enviar el correo electrónico:', error);
        throw error; 
    }
}

//Funcion para mostrar un tennio
async function show(id) {
    const tenni = await models.tenni.findByPk(id);
    return tenni;
}

//Funcion para actualizar un tennio
async function update(id, body) {
    try {
        const { error } = updateTenniSchema.validate(body);
        if (error) {
            throw new Error(error.details.map((err) => err.message).join(', '));
        }

        const [affectedRows, updatedRecords] = await models.tenni.update(body, {
            where: { id },
            returning: true,
        });
        
        if (updatedRecords && updatedRecords.length > 0) {
            const updatedTennis = updatedRecords[0];
            return updatedTennis;
        } else {
            return null; 
        }
    } catch (error) {
        console.error('Error al actualizar el registro:', error);
        throw error;
    }
}


//Funcion para eliminar un tennio
async function destroy(id) {
    const tenni = await models.tenni.findByPk(id);
    const deletedTenni = await models.tenni.destroy({
        where: {
            id
        },
        returning: true
    });
    if(deletedTenni){
        return tenni;
    }
    return null;
}

//Exportar las funciones del controlador
module.exports = {
    index,
    store,
    show,
    update,
    destroy
}