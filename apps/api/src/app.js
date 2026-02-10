const express = require("express");
const cors = require("cors");

const videoRoutes = require("./routes/video.routes");
const cenarioRoutes = require("./routes/cenario.routes");
const beneficioRoutes = require('./routes/beneficio.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/video", videoRoutes);
app.use("/api/cenario", cenarioRoutes);
app.use('/api/beneficios', beneficioRoutes);


module.exports = app;
