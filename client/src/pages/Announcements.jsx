import {
 useEffect,
 useState
}
from "react";

import axios from "axios";

function Announcements() {

 const [
  announcements,
  setAnnouncements
 ] = useState([]);

useEffect(() => {
  axios
    .get("http://localhost:5000/api/announcements")
    .then((res) => {
      console.log(res.data);
      setAnnouncements(res.data);
    })
    .catch((err) => {
      console.error("Announcement Error:", err);
    });
}, []);


 return (

  <div className="min-h-screen bg-slate-950 text-white p-6">

   <h1 className="text-4xl font-bold mb-6">

    Announcements

   </h1>

   {
    announcements.map(
     announcement => (

      <div
       key={announcement._id}
       className="bg-slate-900 p-5 rounded-xl mb-4"
      >

       <h2 className="text-2xl font-bold">

        {announcement.title}

       </h2>

       <p className="mt-2">

        {announcement.content}

       </p>

      </div>

     )
    )
   }

  </div>

 );
}

export default Announcements;