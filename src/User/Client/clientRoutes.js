import express from "express"; 
import * as clientController from "./clientController.js";

const router = express.Router();

router.post("/request-transfer", clientController.requestTransfer);
router.post("/confirm-transfer", clientController.confirmTransfer);