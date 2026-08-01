import { Link } from "react-router-dom";

function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 flex justify-around p-4 border-t border-slate-800">

      <Link to="/dashboard">
        🏠
      </Link>

      <Link to="/events">
        📅
      </Link>

      <Link to="/clubs">
        🏛
      </Link>

      <Link to="/houses">
        🏆
      </Link>

      <Link to="/profile">
        👤
      </Link>

    </div>
  );
}

export default BottomNav;