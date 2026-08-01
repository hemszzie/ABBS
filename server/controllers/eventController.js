const Event = require("../models/Event");

exports.getEvents = async (req, res) => {
  const events = await Event.find();

  res.json(events);
};

exports.createEvent = async (
  req,
  res
) => {
  const event = await Event.create(
    req.body
  );

  res.json(event);
};

exports.registerEvent = async (
  req,
  res
) => {
  const { userId } = req.body;

  const event =
    await Event.findById(
      req.params.id
    );

  if (
    !event.registrations.includes(
      userId
    )
  ) {
    event.registrations.push(
      userId
    );
  }

  await event.save();

  res.json(event);
};

exports.getEvent = async (
  req,
  res
) => {

  const event =
    await Event.findById(
      req.params.id
    );

  res.json(event);
};