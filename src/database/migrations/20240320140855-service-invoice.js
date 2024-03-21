module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("service_invoices", {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      number: {
        type: Sequelize.STRING(191),
        allowNull: false,
      },
      type_name: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      document_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      branch_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      sbu_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      category_name: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      is_service: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      is_reverse_charge_applicable: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      po_reference_number: {
        type: Sequelize.STRING(191),
        allowNull: true,
      },
      reference_invoice_number: {
        type: Sequelize.STRING(191),
        allowNull: true,
      },
      reference_invoice_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      to_account_type_name: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      customer_id: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      items_count: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 0, // Provide a default value
      },
      amount_total: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: true,
        defaultValue: 0, // Provide a default value
      },
      tax_total: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: true,
        defaultValue: 0, // Provide a default value
      },
      sub_total: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: true,
        defaultValue: 0, // Provide a default value
      },
      total: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: true,
        defaultValue: 0, // Provide a default value
      },
      round_off_amount: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: true,
        defaultValue: 0, // Provide a default value
      },
      final_amount: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: true,
        defaultValue: 0, // Provide a default value
      },
      status_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "approval_type_statuses", // The name of the target table
          key: "id", // The name of the target column
        },
        onDelete: "CASCADE", // Optional: cascade on delete
        onUpdate: "CASCADE",
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
    await queryInterface.dropTable("service_invoices");
  },
};
