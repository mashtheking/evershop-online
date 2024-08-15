import logo from "../../assets/es_logo.png";

const Footer = () => {
  return (
    <>
      <div className="text-white">
        <footer className="footer bg-[#a4b288] p-10">
          <aside>
            <a className="btn btn-ghost h-full w-40">
              <img src={logo} alt="company logo" />
            </a>
            <p>
              EverShop Online
              <br />
              Products sell online ever.
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Delivery</a>
            <a className="link link-hover">Category</a>
            <a className="link link-hover">Sorting</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">Products</a>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Products Filter</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        <footer className="footer footer-center bg-[#8d9968] p-4">
          <aside>
            <p>
              Copyright © 2024 - All right reserved by
              <a href="/"> EverShop Online </a>
            </p>
          </aside>
        </footer>
      </div>
    </>
  );
};
export default Footer;
