import { Link } from "react-router-dom";

export const FooterPage = () => {
  return (
    <>
      <div
        id="footer"
        className="flex flex-wrap justify-center items-start w-full bg-[#cca7ff] pb-32"
      >
        <div className="flex justify-center  w-1/3 mt-4 font-bold text-white flex-wrap gap-4">
          <Link
            to={`https://www.instagram.com/pmc.iu/`}
            className="p-2 hover:bg-white/70 rounded-xl ring-2 ring-white duration-300"
          >
            INSTAGRAM
          </Link>
          <Link
            to={`https://www.linkedin.com/company/product-management-clubiu/`}
            className="p-2 hover:bg-white/70 rounded-xl ring-2 ring-white duration-300"
          >
            LINKEDIN
          </Link>
        </div>
        <div className="flex justify-center text w-full mt-4 text-xl lg:text-2xl font-bold text-white flex-wrap gap-4">
          <p className="flex justify-center lg:w-1/3 p-2 hover:bg-white/70 rounded-xl ring-2 ring-white duration-300">
            Inquiries: sicepmc@iu.edu
          </p>
        </div>
      </div>
    </>
  );
};
