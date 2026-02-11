const mongoose = require('mongoose');
const Beneficio = require('../models/beneficio.model');

exports.create = async (req, res, next) => {
  try {
    const beneficio = new Beneficio(req.body);
    const saved = await beneficio.save();
    return res.status(201).json(saved);
  } catch (error) {
    next(error);
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const beneficios = await Beneficio.find({ ativo: true })
      .sort({ createdAt: -1 });

    return res.status(200).json(beneficios);
  } catch (error) {
    next(error);
  }
};

exports.findById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'ID inválido' });
    }

    const beneficio = await Beneficio.findById(id);

    if (!beneficio) {
      return res.status(404).json({ error: 'Benefício não encontrado' });
    }

    return res.status(200).json(beneficio);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updated = await Beneficio.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ error: 'Benefício não encontrado' });
    }

    return res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleted = await Beneficio.findByIdAndUpdate(
      id,
      { ativo: false },
      { new: true }
    );

    if (!deleted) {
      return res.status(404).json({ error: 'Benefício não encontrado' });
    }

    return res.status(200).json({
      message: 'Benefício desativado com sucesso'
    });
  } catch (error) {
    next(error);
  }
};
