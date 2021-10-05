module.exports = (sequelize, Sequelize) => {
    const Temperaturesensor = sequelize.define("temperaturesensor", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING
        },
        temperature: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });
  
    return Temperaturesensor;
  };