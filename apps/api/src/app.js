const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const videoRoutes = require("./routes/video.routes");
const cenarioRoutes = require("./routes/cenario.routes");
const beneficioRoutes = require("./routes/beneficio.routes");
const decisaoRoutes = require("./routes/decisao.routes");

const app = express();

/*
|--------------------------------------------------------------------------
| Middlewares Globais
|--------------------------------------------------------------------------
*/

app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // Log de requisições HTTP

/*
|--------------------------------------------------------------------------
| Health Check (monitoramento corporativo)
|--------------------------------------------------------------------------
*/

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "interactive-video-api",
    timestamp: new Date().toISOString()
  });
});

/*
|--------------------------------------------------------------------------
| Rotas da API
|--------------------------------------------------------------------------
*/

app.use("/api/video", videoRoutes);
app.use("/api/cenario", cenarioRoutes);
app.use("/api/beneficios", beneficioRoutes);
app.use("/api/decisao", decisaoRoutes);

/*
|--------------------------------------------------------------------------
| Middleware 404
|--------------------------------------------------------------------------
*/

app.use((req, res) => {
  res.status(404).json({
    error: "Rota não encontrada"
  });
});

/*
|--------------------------------------------------------------------------
| Error Handler Global
|--------------------------------------------------------------------------
*/

app.use((err, req, res, next) => {
  console.error("Erro capturado:", err);

  res.status(err.status || 500).json({
    error: err.message || "Erro interno do servidor"
  });
});

module.exports = app;
