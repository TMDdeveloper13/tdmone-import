import Sequelize from "sequelize";
import { sequelize } from "../database";

const ApprovalStatus = sequelize.define(
  "approval_type_statuses",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    status: {
      type: Sequelize.STRING(20),
      allowNull: false,
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
  },
  {
    collate: "utf8mb4_general_ci",
    timestamps: false,
    tableName: "approval_type_statuses",
  }
);

export default ApprovalStatus;
