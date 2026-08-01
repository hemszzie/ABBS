import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
     
   <img
  src={
    event.posterImage?.trim()
      ? event.posterImage
      : event.bannerImage?.trim()
      ? event.bannerImage
      : "https://picsum.photos/600/400"
  }
  alt={event.title}
  className="w-full h-56 object-cover"
  onError={(e) => {
    e.target.src =
      "https://picsum.photos/600/400";
  }}
/>

      <div className="p-5">

        <span className="bg-gray-600 text-sm px-3 py-1 rounded-full">
          {event.category}
        </span>

        <h2 className="text-2xl font-bold mt-4">
          {event.title}
        </h2>

        <p className="text-gray-400 mt-2">
          📍 {event.venue}
        </p>

        <p className="text-gray-400">
          📅 {
            event.eventDate
              ? new Date(
                  event.eventDate
                ).toLocaleDateString()
              : "Coming Soon"
          }
        </p>

        <p className="text-gray-400 mt-2">
          👥 {
            event.registrations?.length || 0
          } Registered
        </p>

        <Link
          to={`/events/${event._id}`}
          className="block mt-5 bg-blue-600 text-center py-3 rounded-xl hover:bg-blue-700"
        >
          View Event
        </Link>

      </div>

    </div>
  );
}

export default EventCard;