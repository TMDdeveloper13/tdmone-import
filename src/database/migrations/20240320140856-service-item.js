module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("service_items", {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      code: {
        type: Sequelize.STRING(191),
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(191),
        allowNull: false,
      },
      is_discount: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
      created_by_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
      },
      updated_by_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
      },
      deleted_by_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("service_items");
  },
};
