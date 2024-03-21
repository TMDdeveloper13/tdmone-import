import { Router } from "express";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

import invoiceController from "../controllers/invoiceController";
import invoiceImportMiddleware from "../middlewares/invoiceImportMiddleware";

const router = Router();

router.post(
  "/import",
  upload.single("files"),
  invoiceImportMiddleware,
  invoiceController.invoiceImport
);

export default router;
