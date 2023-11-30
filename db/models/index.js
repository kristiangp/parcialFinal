const defineTenni = require("./tennis.model");

function defineModels( sequelize ){
    defineTenni(sequelize)
    //Other models go here
}

module.exports = defineModels