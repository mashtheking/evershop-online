import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center my-20 mx-auto space-y-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Error Page - EverShop</title>
        <meta name="description" content="Ever Shop online Error page" />
      </Helmet>
      <h1 className="text-5xl font-bold text-red-700">404 - Page not found!</h1>
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
