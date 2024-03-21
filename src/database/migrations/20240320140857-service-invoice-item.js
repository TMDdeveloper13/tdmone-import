module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("service_invoice_items", {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      service_invoice_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: "service_invoices", // The name of the target table
          key: "id", // The name of the target column
        },
        onDelete: "CASCADE", // Optional: cascade on delete
        onUpdate: "CASCADE",
      },
      service_item_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: "service_items", // The name of the target table
          key: "id", // The name of the target column
        },
        onDelete: "CASCADE", // Optional: cascade on delete
        onUpdate: "CASCADE",
      },
      e_invoice_uom_name: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      qty: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false,
      },
      rate: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false,
      },
      sub_total: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false,
      },
      is_discount: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("service_invoice_items");
  },
};
