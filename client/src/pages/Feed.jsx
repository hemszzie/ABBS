import { useEffect, useState } from "react";
import axios from "axios";

function Feed() {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  const fetchPosts = async () => {
    try {

      const res =
      await axios.get(
        "http://localhost:5000/api/posts"
      );

      setPosts(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePost = async () => {

    if (!content.trim()) return;

    try {

      await axios.post(
        "http://localhost:5000/api/posts",
        {
          content,
          author: user._id,
        }
      );

      setContent("");
      fetchPosts();

    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async (id) => {

    try {

      await axios.put(
        `http://localhost:5000/api/posts/${id}/like`,
        {
          userId: user._id,
        }
      );

      fetchPosts();

    } catch (error) {
      console.log(error);
    }
  };

  const handleComment = async (
    postId
  ) => {

    const text =
      comments[postId];

    if (!text?.trim()) return;

    try {

      await axios.post(
        `http://localhost:5000/api/posts/${postId}/comment`,
        {
          userId: user._id,
          text,
        }
      );

      setComments({
        ...comments,
        [postId]: "",
      });

      fetchPosts();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      {/* Hero */}

      <div className="
        bg-gradient-to-r
        from-cyan-600
        via-blue-600
        to-indigo-700
        p-8
        rounded-3xl
        shadow-2xl
        mb-8
      ">

        <h1 className="text-5xl font-black">
          Community Feed
        </h1>

        <p className="mt-3 text-blue-100 text-lg">
          Share updates, achievements and campus moments
        </p>

        <div className="mt-5 flex gap-4 flex-wrap">

          <div className="
            bg-white/20
            px-4
            py-2
            rounded-xl
          ">
            📝 {posts.length} Posts
          </div>

          <div className="
            bg-white/20
            px-4
            py-2
            rounded-xl
          ">
            👥 ABBS Community
          </div>

        </div>

      </div>

      {/* Create Post */}

      <div className="
        bg-slate-900
        border
        border-slate-800
        p-6
        rounded-3xl
        shadow-xl
      ">

        <div className="
          flex
          items-center
          gap-4
          mb-5
        ">

          <img
            src={
              user?.profileImage ||
              `https://ui-avatars.com/api/?name=${user?.name}`
            }
            alt="profile"
            className="
              w-14
              h-14
              rounded-full
              object-cover
              border-2
              border-cyan-500
            "
          />

          <div>

            <h3 className="font-bold text-lg">
              {user?.name}
            </h3>

            <p className="text-gray-400">
              What's happening today?
            </p>

          </div>

        </div>

        <textarea
          rows="4"
          value={content}
          onChange={(e) =>
            setContent(
              e.target.value
            )
          }
          placeholder="Share something with the community..."
          className="
            w-full
            bg-slate-800
            p-4
            rounded-2xl
            border
            border-slate-700
            outline-none
          "
        />

        <button
          onClick={handlePost}
          className="
            mt-4
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            px-8
            py-3
            rounded-2xl
            font-semibold
            hover:scale-105
            transition
          "
        >
          🚀 Share Post
        </button>

      </div>

      {/* Empty State */}

      {posts.length === 0 && (

        <div className="
          mt-8
          bg-slate-900
          rounded-3xl
          p-20
          text-center
        ">

          <h2 className="
            text-3xl
            font-bold
          ">
            No Posts Yet
          </h2>

          <p className="
            text-gray-400
            mt-3
          ">
            Be the first person to post.
          </p>

        </div>

      )}

      {/* Posts */}

      <div className="mt-8">

        {posts.map((post) => (

          <div
            key={post._id}
            className="
              bg-slate-900
              border
              border-slate-800
              p-6
              rounded-3xl
              mb-5
              hover:border-cyan-500
              transition
            "
          >

            <div className="
              flex
              items-center
              gap-4
            ">

              <img
                src={
                  post.author?.profileImage ||
                  `https://ui-avatars.com/api/?name=${post.author?.name}`
                }
                alt="profile"
                className="
                  w-12
                  h-12
                  rounded-full
                  object-cover
                "
              />

              <div>

                <h3 className="
                  font-bold
                  text-lg
                ">
                  {post.author?.name}
                </h3>

                <p className="
                  text-gray-400
                  text-sm
                ">
                  {new Date(
                    post.createdAt
                  ).toLocaleString()}
                </p>

              </div>

            </div>

            <p className="
              mt-5
              text-lg
            ">
              {post.content}
            </p>

            <div className="
              flex
              gap-3
              mt-5
              flex-wrap
            ">

              <button
                onClick={() =>
                  handleLike(
                    post._id
                  )
                }
                className="
                  bg-pink-600
                  px-5
                  py-2
                  rounded-xl
                "
              >
                ❤️ {post.likes?.length || 0}
              </button>

              <div className="
                bg-slate-800
                px-5
                py-2
                rounded-xl
              ">
                💬 {post.comments?.length || 0}
              </div>

            </div>

            {/* Comment Box */}

            <div className="mt-5">

              <input
                value={
                  comments[
                    post._id
                  ] || ""
                }
                onChange={(e) =>
                  setComments({
                    ...comments,
                    [post._id]:
                      e.target.value,
                  })
                }
                placeholder="Add comment..."
                className="
                  w-full
                  p-3
                  bg-slate-800
                  rounded-xl
                "
              />

              <button
                onClick={() =>
                  handleComment(
                    post._id
                  )
                }
                className="
                  mt-3
                  bg-blue-600
                  px-5
                  py-2
                  rounded-xl
                "
              >
                Comment
              </button>

            </div>

            {/* Comments */}

            <div className="mt-5">

              {post.comments?.map(
                (
                  comment,
                  index
                ) => (

                  <div
                    key={index}
                    className="
                      bg-slate-800
                      p-3
                      rounded-xl
                      mb-2
                    "
                  >
                    💬 {comment.text}
                  </div>

                )
              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Feed;