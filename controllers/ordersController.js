const Order = require('../models/Order')

exports.getOrders = async (req, res, next) => {
  // Schreib hier code um alle Bestellungen aus der orders-Collection zu holen
  const orders = await Order.find().populate("record", "-price -year")
  res.status(200).send(orders);
};

exports.getOrder = async (req, res, next) => {
  const { id } = req.params;
  // Schreib hier code um die Bestellung mit der id aus params aus der orders-Collection zu holen
  const order = await Order.findById(id).populate("record", "-price -year")
  res.status(200).send(order);
};

exports.deleteOrder = async (req, res, next) => {
  try{
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) throw new createError.NotFound();
    res.status(200).send(order);
  } catch (e) {
    next(e);
  }
};

exports.updateOrder = async (req, res, next) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!order) throw new createError.NotFound();
    res.status(200).send(order);
  } catch (e) {
    next(e);
  }
};

exports.addOrder = async (req, res, next) => {
  const data = req.body;
  // Schreib hier code um die Daten der neuen Bestellungen aus req.body in der orders-Collection zu speichern
  const order = await Order.create(data)
  res.status(200).send(order);
};