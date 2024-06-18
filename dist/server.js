"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const submissionRoutes_1 = require("./routes/submissionRoutes");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Serve static files (optional)
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Routes
app.use('/api', submissionRoutes_1.submissionRouter);
// Ping endpoint
app.get('/ping', (req, res) => {
    res.send('true');
});
// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
