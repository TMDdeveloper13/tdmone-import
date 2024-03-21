import Sequelize from "sequelize";
import { sequelize } from "../database";

const SerialNumber = sequelize.define(
  "serialNumbers",
  {
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
  },
  {
    collate: "utf8mb4_general_ci",
    timestamps: true,
    tableName: "serialNumbers",
  }
);

export default SerialNumber;
