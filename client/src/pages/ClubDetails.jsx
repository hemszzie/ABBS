import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ClubDetails() {

  const { id } = useParams();

  const [club, setClub] =
    useState(null);

  useEffect(() => {

    axios
      .get(
        `http://localhost:5000/api/clubs/${id}`
      )
      .then((res) =>
        setClub(res.data)
      );

  }, [id]);

  if (!club) {
    return (
      <div className="text-white p-6">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <img
        src={
          club.logo ||
          "https://picsum.photos/300"
        }
        className="w-32 h-32 rounded-full"
      />

      <h1 className="text-5xl font-bold mt-4">
        {club.name}
      </h1>

      <p className="mt-4">
        {club.description}
      </p>

      <div className="mt-8">

        <h2 className="text-3xl font-bold">
          Projects
        </h2>

        {club.projects?.map(
          (project, index) => (

          <div
            key={index}
            className="bg-slate-900 p-4 rounded-xl mt-4"
          >
            <h3>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>

          </div>

        ))}
      </div>

      <div className="mt-8">

        <h2 className="text-3xl font-bold">
          Resources
        </h2>

        {club.resources?.map(
          (resource, index) => (

          <a
            key={index}
            href={resource.fileUrl}
            target="_blank"
            rel="noreferrer"
            className="block bg-slate-900 p-4 rounded-xl mt-4"
          >
            📚 {resource.title}
          </a>

        ))}

        <div className="mt-8">

  <h2 className="text-3xl font-bold">
    📢 Club Feed
  </h2>

  {club.posts?.map((post, index) => (

    <div
      key={index}
      className="bg-slate-900 p-4 rounded-xl mt-4"
    >
      <h3 className="font-bold">
        {post.author}
      </h3>

      <p className="mt-2">
        {post.content}
      </p>
    </div>

  ))}

</div>

<div className="mt-8">

  <h2 className="text-3xl font-bold">
    📅 Upcoming Events
  </h2>

  {club.events?.map((event, index) => (

    <div
      key={index}
      className="bg-slate-900 p-4 rounded-xl mt-4"
    >
      <h3>{event.title}</h3>

      <p>
        {new Date(
          event.date
        ).toLocaleDateString()}
      </p>
    </div>

  ))}

</div>
        
        <div className="mt-8">

  <h2 className="text-3xl font-bold">
    Club Feed
  </h2>

  {club.posts?.map(
    (post, index) => (

      <div
        key={index}
        className="bg-slate-900 p-4 rounded-xl mt-4"
      >
        <h3 className="font-bold">
          {post.author}
        </h3>

        <p className="mt-2">
          {post.content}
        </p>

      </div>

    )
  )}

</div>

      </div>

    </div>
  );
}

export default ClubDetails;