'use strict';

module.exports = {
    //Añades una columna en la tabla quizzes que ponga el id del autor
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Quizzes',
            'AuthorId',
            {type: Sequelize.INTEGER}
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Quizzes', 'AuthorId');
    }
};
