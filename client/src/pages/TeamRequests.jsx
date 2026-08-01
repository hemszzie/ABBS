import { useEffect, useState } from "react";
import axios from "axios";

function TeamRequests() {
  const [requests, setRequests] =
    useState([]);

  const [formData, setFormData] =
    useState({
      eventName: "",
      description: "",
      requiredMembers: 1,
    });

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const res =
        await axios.get(
          "http://localhost:5000/api/team-requests"
        );

      setRequests(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createRequest = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/team-requests",
        {
          ...formData,
          createdBy: user._id,
        }
      );

      setFormData({
        eventName: "",
        description: "",
        requiredMembers: 1,
      });

      fetchRequests();
    } catch (error) {
      console.log(error);
    }
  };

  const joinTeam = async (id) => {
  try {

    const res = await axios.put(
      `http://localhost:5000/api/team-requests/${id}/join`,
      {
        userId: user._id,
      }
    );

    alert(res.data.message);

    fetchRequests();

  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Unable to send request"
    );

  }
};

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      {/* Header */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          Team Formation Hub
        </h1>

        <p className="text-gray-400 mt-2">
          Create teams and collaborate
          for hackathons, competitions
          and events.
        </p>

      </div>

      {/* Create Team Request */}

      <div
        className="
        bg-slate-900
        p-6
        rounded-3xl
        border
        border-slate-800
        shadow-xl
        mb-10
      "
      >
        <h2 className="text-2xl font-semibold mb-5">
          Create Team Request
        </h2>

        <input
          placeholder="Event Name"
          value={formData.eventName}
          onChange={(e) =>
            setFormData({
              ...formData,
              eventName: e.target.value,
            })
          }
          className="
            w-full
            p-3
            rounded-xl
            bg-slate-800
            mb-3
            outline-none
          "
        />

        <textarea
          placeholder="Need 2 Developers, 1 Designer..."
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description:
                e.target.value,
            })
          }
          className="
            w-full
            p-3
            rounded-xl
            bg-slate-800
            mb-3
            outline-none
          "
          rows="4"
        />

        <input
          type="number"
          min="1"
          value={formData.requiredMembers}
          onChange={(e) =>
            setFormData({
              ...formData,
              requiredMembers:
                e.target.value,
            })
          }
          className="
            w-full
            p-3
            rounded-xl
            bg-slate-800
            mb-4
            outline-none
          "
        />

        <button
          onClick={createRequest}
          className="
            bg-purple-600
            hover:bg-purple-700
            px-6
            py-3
            rounded-xl
            font-medium
          "
        >
          Create Request
        </button>
      </div>

      {/* Requests */}

      <div className="grid md:grid-cols-2 gap-6">

        {requests.map((request) => {
          const currentMembers =
            request.members?.length || 0;

          const teamFull =
            currentMembers >=
            request.requiredMembers;

          return (
            <div
              key={request._id}
              className="
                bg-slate-900
                rounded-3xl
                p-6
                border
                border-slate-800
                hover:border-purple-500
                transition
                flex
                flex-col
                justify-between
                min-h-[320px]
              "
            >
              <div>

                <h2 className="text-3xl font-bold">
                  {request.eventName}
                </h2>

                <p className="mt-4 text-gray-300">
                  {request.description}
                </p>

                <div className="mt-5 space-y-2">

                  <p className="text-gray-400">
                    Created By:
                    {" "}
                    {
                      request.createdBy
                        ?.name
                    }
                  </p>

                  <p className="text-gray-400">
                    Members:
                    {" "}
                    {currentMembers}
                    /
                    {
                      request.requiredMembers
                    }
                  </p>

                </div>

              </div>

             {request.createdBy?._id !== user._id && (

teamFull ? (
                <button
                  disabled
                  className="
                    mt-6
                    bg-red-600
                    px-5
                    py-3
                    rounded-xl
                    cursor-not-allowed
                    font-medium
                    w-fit
                  "
                >
                  Team Full
                </button>
              ) : (
                <button
                  onClick={() =>
                    joinTeam(
                      request._id
                    )
                  
                  }
                  className="
                    mt-6
                    bg-green-600
                    hover:bg-green-700
                    px-5
                    py-3
                    rounded-xl
                    font-medium
                    w-fit
                  "
                >
                  Join Team
                </button>

              )
              )}

              {
request.createdBy?._id === user._id &&
request.joinRequests?.length > 0 && (

<div className="mt-4">

  <h3 className="font-bold text-lg">
    Pending Requests
  </h3>

  {
  request.joinRequests.map(
  (join) => (

    <div
      key={join._id}
      className="
      bg-slate-800
      p-3
      rounded-xl
      mt-2
      "
    >

      <p>
        {join.user?.name} wants to join your team.
      </p>

      <button
        onClick={async () => {

 await axios.put(
  `http://localhost:5000/api/team-requests/${request._id}/accept/${join.user._id}`
);
          fetchRequests();

        }}
        className="
        bg-green-600
        px-3
        py-1
        rounded
        mt-2
        "
      >
        Accept
      </button>

      <button
onClick={async()=>{

await axios.put(
  `http://localhost:5000/api/team-requests/${request._id}/reject/${join.user._id}`
);

fetchRequests();

}}
className="
bg-red-600
px-3
py-1
rounded
ml-2
"
>
Reject
</button>

    </div>

  ))
  }

</div>

)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TeamRequests;