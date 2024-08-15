import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center my-20 mx-auto space-y-5">
      <h1 className="text-5xl font-bold text-red-700">
        404 - Page not found!
      </h1>
      <hr />
      <ul className="menu max-w-96 mx-auto">
        <li>
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default ErrorPage;
