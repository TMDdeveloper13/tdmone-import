module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("serialNumbers", [
      {
        code: "ticket-number",
        financialYear: "F24",
        startNumber: 1,
        lastNumber: 0,
      },
    ]);

    await queryInterface.bulkInsert("service_items", [
      {
        code: "F111",
        name: "Item1",
      },
      {
        code: "f112",
        name: "Item2",
      },
      {
        code: "F114",
        name: "Item3",
      },
      {
        code: "F036",
        name: "Item4",
      },
    ]);
    await queryInterface.bulkInsert("approval_type_statuses", [
      {
        status: "New",
      },
      {
        status: "Approval 1 Pending",
      },
      {
        status: "Approval 2 Pending",
      },
      {
        status: "Approved",
      },
      {
        status: "Approval 1 Rejected",
      },
      {
        status: "E-Invoice Fail",
      },
      {
        status: "IRN Canceled",
      },
      {
        status: "Canceled",
      },
    ]);
  },
};
