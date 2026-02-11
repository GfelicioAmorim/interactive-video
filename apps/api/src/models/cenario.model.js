const mongoose = require('mongoose');

const CenarioSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    topico_id: {
      type: String,
      required: true,
      trim: true
    },
    perfil_id: {
      type: String,
      required: true,
      trim: true
    },
    tipo_render: {
      type: String,
      required: true,
      enum: ['lista', 'texto', 'decisao']
    },
    titulo_overlay: {
      type: String,
      required: true,
      trim: true
    },
    texto: {
      type: String,
      trim: true
    },
    beneficios: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Beneficio'
      }
    ],
    acao_apos: {
      tipo: {
        type: String,
        required: true
      },
      destino: {
        type: String
      }
    },
    ativo: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('Cenario', CenarioSchema);
