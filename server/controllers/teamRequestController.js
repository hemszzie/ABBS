const TeamRequest =
require("../models/TeamRequest");

exports.getRequests =
async(req,res)=>{

 const requests =
 await TeamRequest.find()
 .populate(
  "createdBy",
  "name"
 )

 .populate(
  "joinRequests.user",
  "name"
 );

 res.json(requests);
};

exports.createRequest =
async(req,res)=>{

 const request =
 await TeamRequest.create(
  req.body
 );

 res.json(request);
};

exports.joinTeam = async (req, res) => {

  const { userId } = req.body;

  const request =
    await TeamRequest.findById(
      req.params.id
    );

  if (!request) {
    return res.status(404).json({
      message: "Team Request Not Found"
    });
  }

  const alreadyMember =
  request.members.some(
    m => m.toString() === userId
  );

if (alreadyMember) {
  return res.status(400).json({
    message: "Already a member"
  });
}

  const alreadyRequested =
    request.joinRequests.some(
      r => r.user.toString() === userId
    );

  if (alreadyRequested) {
    return res.status(400).json({
      message:
      "Request already sent"
    });
  }

  request.joinRequests.push({
    user: userId,
    status: "pending"
  });

  await request.save();

  res.json({
    message: "Join Request Sent"
  });

};

exports.acceptRequest = async (req, res) => {

  const team =
    await TeamRequest.findById(
      req.params.teamId
    );

  const request =
    team.joinRequests.find(
      r =>
      r.user.toString() ===
      req.params.userId
    );

  if (!request) {
    return res.status(400).json({
      message: "Request already processed"
    });
  }

  team.members.push(
    req.params.userId
  );

  team.joinRequests =
    team.joinRequests.filter(
      r =>
      r.user.toString() !==
      req.params.userId
    );

  await team.save();

  res.json({
    message: "Member Added"
  });

};

exports.rejectRequest = async (req, res) => {

  const team =
    await TeamRequest.findById(
      req.params.teamId
    );

  const request =
    team.joinRequests.find(
      r =>
      r.user.toString() ===
      req.params.userId
    );

  if (!request) {
    return res.status(400).json({
      message: "Request already processed"
    });
  }

  team.joinRequests =
    team.joinRequests.filter(
      r =>
      r.user.toString() !==
      req.params.userId
    );

  await team.save();

  res.json({
    message: "Request Rejected"
  });

};