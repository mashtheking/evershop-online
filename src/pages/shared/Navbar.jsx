import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/es_logo.png";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { MdLogin } from "react-icons/md";
import userPhoto from "../../../public/favicon.png";

const Navbar = () => {
  const { user, loading, logOut } = useAuth();

  const navLinks = [
    {
      navName: "Home",
      path: "/",
    },
    {
      navName: "Products",
      path: "/products",
    },
    {
      navName: "About",
      path: "/about",
    },
    {
      navName: "Contact",
      path: "/contact",
    },
  ];

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          title: "Signed Out successfully!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <header className="navbar py-4 md:px-14 bg-[#bbcba980] text-white font-extrabold z-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#768048]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#bbcba980] rounded-box w-52 uppercase"
            >
              {navLinks.map((nav) => (
                <li key={nav.navName} className="hover:text-[#768048]">
                  <NavLink to={nav.path}>{nav.navName}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost h-full w-40">
            <img src={logo} alt="company logo" />
          </a>
        </div>
        <div className="navbar items-center justify-end gap-1 md:gap-2">
          <ul className="menu menu-horizontal hidden lg:flex uppercase">
            {navLinks.map((nav) => (
              <li key={nav.navName} className="hover:text-[#768048]">
                <NavLink to={nav.path}>{nav.navName}</NavLink>
              </li>
            ))}
          </ul>
          {user ? (
            <div
              data-tip={user?.displayName ? user.displayName : user.email}
              className="dropdown dropdown-end mr-1 tooltip tooltip-bottom tooltip-primary z-10"
            >
              {!loading ? (
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      src={user?.photoURL ? user.photoURL : userPhoto}
                      alt="Logged user photo"
                    />
                  </div>
                </div>
              ) : (
                <span className="loading loading-infinity loading-lg"></span>
              )}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#b1b6c0] text-black rounded-box w-52 uppercase"
              >
                <li>
                  <p className="py-2">
                    {user?.displayName ? user.displayName : user.email}
                  </p>
                </li>
                <Link
                  onClick={handleSignOut}
                  className="btn btn-outline px-3 font-extrabold"
                >
                  Sign Out
                </Link>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-outline px-3 text-[#768048] uppercase font-extrabold"
            >
              <MdLogin className="text-2xl" />
            </Link>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
