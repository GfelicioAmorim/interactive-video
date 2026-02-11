const mongoose = require('mongoose');

const BeneficioSchema = new mongoose.Schema(
  {
    codigo: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    titulo: {
      type: String,
      required: true,
      trim: true
    },
    descricao: {
      type: String,
      required: true,
      trim: true
    },
    tipo: {
      type: String,
      enum: ['financeiro', 'saude', 'educacional', 'flexivel'],
      required: true
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

module.exports = mongoose.model('Beneficio', BeneficioSchema);
