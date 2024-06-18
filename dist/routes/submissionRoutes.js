"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submissionRouter = void 0;
const express_1 = __importDefault(require("express"));
const submissionController_1 = require("../controllers/submissionController");
exports.submissionRouter = express_1.default.Router();
// POST /api/submit
exports.submissionRouter.post('/submit', submissionController_1.submitForm);
// GET /api/read?index=0
exports.submissionRouter.get('/read', submissionController_1.readForm);
