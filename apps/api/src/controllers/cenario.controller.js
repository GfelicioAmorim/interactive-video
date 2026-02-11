const mongoose = require('mongoose');
const Cenario = require('../models/cenario.model');

/**
 * Criar cenário
 */
exports.create = async (req, res, next) => {
  try {
    const cenario = new Cenario(req.body);
    const saved = await cenario.save();

    return res.status(201).json(saved);
  } catch (error) {
    next(error);
  }
};

/**
 * Listar todos
 */
exports.findAll = async (req, res, next) => {
  try {
    const cenarios = await Cenario.find({ ativo: true })
      .populate('beneficios')
      .sort({ createdAt: -1 });

    return res.status(200).json(cenarios);
  } catch (error) {
    next(error);
  }
};

/**
 * Buscar por Mongo ID
 */
exports.findById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'ID inválido' });
    }

    const cenario = await Cenario.findById(id)
      .populate('beneficios');

    if (!cenario) {
      return res.status(404).json({ error: 'Cenário não encontrado' });
    }

    return res.status(200).json(cenario);
  } catch (error) {
    next(error);
  }
};

/**
 * Buscar por ID lógico (usado pelo frontend)
 */
exports.findByLogicalId = async (req, res, next) => {
  try {
    const { logicalId } = req.params;

    const cenario = await Cenario.findOne({
      id: logicalId,
      ativo: true
    }).populate('beneficios');

    if (!cenario) {
      return res.status(404).json({ error: 'Cenário não encontrado' });
    }

    return res.status(200).json(cenario);
  } catch (error) {
    next(error);
  }
};

/**
 * Atualizar
 */
exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'ID inválido' });
    }

    const updated = await Cenario.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    ).populate('beneficios');

    if (!updated) {
      return res.status(404).json({ error: 'Cenário não encontrado' });
    }

    return res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

/**
 * Remover (soft delete recomendado)
 */
exports.remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'ID inválido' });
    }

    const deleted = await Cenario.findByIdAndUpdate(
      id,
      { ativo: false },
      { new: true }
    );

    if (!deleted) {
      return res.status(404).json({ error: 'Cenário não encontrado' });
    }

    return res.status(200).json({
      message: 'Cenário desativado com sucesso'
    });
  } catch (error) {
    next(error);
  }
};
