'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      rg: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      maritalStatus: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      facebook: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.STRING
      },
      info: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Clients');
  }
};
//# sourceMappingURL=20161215165911-create-client-migration.js.map
