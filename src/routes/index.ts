import { Router } from "express";
import invoice from "./invoice";

const router = Router();

router.use("/invoice", invoice);

export default router;
