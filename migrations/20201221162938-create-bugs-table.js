module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bugs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      problem: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      errorText: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      commit: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bugs');
  },
};
