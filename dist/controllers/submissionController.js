"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readForm = exports.submitForm = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dbPath = path_1.default.resolve(__dirname, '../db/db.json');
const submitForm = (req, res) => {
    try {
        const { name, email, phone, github_link, stopwatch_time } = req.body;
        // Read current data
        const submissions = JSON.parse(fs_1.default.readFileSync(dbPath, 'utf-8'));
        // Create new submission
        const newSubmission = {
            name,
            email,
            phone,
            github_link,
            stopwatch_time,
            timestamp: new Date().toISOString(),
        };
        // Add to submissions array
        submissions.push(newSubmission);
        // Write to file
        fs_1.default.writeFileSync(dbPath, JSON.stringify(submissions, null, 2));
        res.status(201).json({ message: 'Submission successful', submission: newSubmission });
    }
    catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ message: 'Error submitting form' });
    }
};
exports.submitForm = submitForm;
const readForm = (req, res) => {
    try {
        const index = Number(req.query.index) || 0;
        // Read current data
        const submissions = JSON.parse(fs_1.default.readFileSync(dbPath, 'utf-8'));
        if (index < 0 || index >= submissions.length) {
            res.status(404).json({ message: 'Submission not found' });
        }
        else {
            res.status(200).json(submissions[index]);
        }
    }
    catch (error) {
        console.error('Error reading form:', error);
        res.status(500).json({ message: 'Error reading form' });
    }
};
exports.readForm = readForm;
