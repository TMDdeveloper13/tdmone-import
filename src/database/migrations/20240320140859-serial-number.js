module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("serialNumbers", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      code: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      financialYear: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: false,
      },
      startNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      lastNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("serialNumbers");
  },
};
