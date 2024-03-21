import { Validator } from "node-input-validator";
import {
  ServiceInvoice,
  ServiceInvoiceItem,
  ServiceItem,
} from "../database/models";
import { Op } from "sequelize";
import serialNumberService from "../services/serialNumberService";

class InvoiceController {
  constructor() {}
  public async invoiceImport(req: any, res: any) {
    try {
      const data = req.convertedData;
      const items = data["Item Details"];
      const invoiceData = data["CN DN Import Template"];
      const itemRequired = items.map((item: any) => {
        return item["Item Code"];
      });
      const itemsTable = await ServiceItem.findAll({
        where: { code: itemRequired },
      });
      const itemsObject = itemsTable.reduce((acc: any, user: any) => {
        acc[user.code] = user.dataValues;
        return acc;
      }, {});
      for (const invoice of invoiceData) {
        let invoiceNo = await serialNumberService.generateSerialNumber(
          `TDM${invoice["Type"]}`,
          "ticket-number"
        );
        let createInvoice = {
          number: invoiceNo,
          type_name: invoice["Type"],
          document_date: invoice["Doc Date"],
          branch_name: invoice["Branch"],
          sbu_name: invoice["SBU"],
          category_name: invoice["Category"],
          is_service: invoice["Is Service"] == "Yes" ? 1 : 0,
          is_reverse_charge_applicable:
            invoice["Reverse Charge Applicable"] == "Yes" ? 1 : 0,
          po_reference_number: invoice["PO Reference Number"],
          reference_invoice_number: invoice["Reference Invoice Number"],
          reference_invoice_date: invoice["Reference Invoice Date"],
          to_account_type_name: invoice["To Account Type"],
          customer_id: invoice["To Account Type"],
          status_id: 1,
          created_at: new Date(),
        };
        const createdInvoice: any = await ServiceInvoice.create(createInvoice);
        let items_count = 0;
        let amount_total = 0;
        let itemDetails = items
          .filter((item: any) => {
            return item.SNO == invoice["SNO"];
          })
          .map((item1: any) => {
            items_count += 1;
            amount_total += +item1["Quantity"] * +item1["Amount"];
            return {
              service_invoice_id: createdInvoice.id,
              service_item_id: itemsObject[item1["Item Code"]]?.id,
              e_invoice_uom_name: item1["UOM"],
              description: item1["Reference"],
              qty: item1["Quantity"],
              rate: item1["Amount"],
              sub_total: item1["Quantity"] * item1["Amount"],
              is_discount: 0,
            };
          });
        await ServiceInvoiceItem.bulkCreate(itemDetails);
        let tax_total = amount_total * 0.09;
        let sub_total = amount_total;
        let total = +tax_total + +sub_total;
        let final_amount = Math.ceil(total);
        let round_off_amount = final_amount - total;
        let updateInvoice = {
          items_count: items_count,
          amount_total: amount_total,
          tax_total: amount_total * 0.09,
          sub_total: sub_total,
          total: total,
          round_off_amount: round_off_amount,
          final_amount: final_amount,
        };
        await ServiceInvoice.update(updateInvoice, {
          where: { id: createdInvoice.id },
        });
      }
      return res
        .status(200)
        .json({ success: true, message: "Invoice Imported Successfully" });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}

const invoiceController = new InvoiceController();
export default invoiceController;
