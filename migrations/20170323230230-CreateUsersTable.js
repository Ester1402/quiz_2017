'use strict';

module.exports = {
    //añades funciones a la tabla uSUARIOS
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Users',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },
                username: {
                    type: Sequelize.STRING,
                    unique: true,
                    validate: {
                        notEmpty: {msg: "Falta el username."}
                    }
                },
                password: {
                    type: Sequelize.STRING,
                    validate: {notEmpty: {msg: "Falta el password."}}
                },
                salt: {
                    type: Sequelize.STRING
                },
                isAdmin: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false
                },
                createdAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                }
            },
            {
                sync: {force: true}
            }
        );
    },
//Las funciones down se eliminan
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Users');
    }
};
