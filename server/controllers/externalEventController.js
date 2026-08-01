const ExternalEvent = require("../models/ExternalEvent");

exports.getExternalEvents = async (req, res) => {
  try {
    const events = await ExternalEvent.find(); // Returns all events
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createExternalEvent = async (req, res) => {
  try {
    const event = await ExternalEvent.create({
      ...req.body,
      brochurePdf: req.file ? `/uploads/${req.file.filename}` : ""
    });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getExternalEventById = async (req, res) => {
  const event = await ExternalEvent.findById(req.params.id);
  res.json(event);
};