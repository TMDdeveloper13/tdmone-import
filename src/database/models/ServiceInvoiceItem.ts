import Sequelize from "sequelize";
import { sequelize } from "../database";
import { ServiceInvoice, ServiceItem } from ".";

const ServiceInvoiceItem = sequelize.define(
  "service_invoice_items",
  {
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
  },
  {
    collate: "utf8mb4_general_ci",
    timestamps: false,
    tableName: "service_invoice_items",
  }
);

//Relationships ---------------------------------

ServiceInvoiceItem.belongsTo(ServiceInvoice, {
  foreignKey: "service_invoice_id",
});
ServiceInvoice.hasMany(ServiceInvoiceItem, {
  foreignKey: "service_invoice_id",
});

ServiceInvoiceItem.belongsTo(ServiceItem, { foreignKey: "service_item_id" });
ServiceItem.hasMany(ServiceInvoiceItem, { foreignKey: "service_item_id" });

export default ServiceInvoiceItem;
