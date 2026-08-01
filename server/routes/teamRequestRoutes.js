const express =
require("express");

const router =
express.Router();

const {
 getRequests,
 createRequest,
 joinTeam,
 acceptRequest,
 rejectRequest,
}
=
require(
 "../controllers/teamRequestController"
);

router.get(
 "/",
 getRequests
);

router.post(
 "/",
 createRequest
);

router.put(
 "/:id/join",
 joinTeam
);

router.put(
 "/:teamId/accept/:userId",
 acceptRequest
);

router.put(
 "/:teamId/reject/:userId",
 rejectRequest
);

module.exports =
router;