import { Link } from "react-router-dom";

export const JoinPage = () => {
  return (
    <>
      <div
        id="interested"
        className="flex justify-center items-center w-full h-1/4 p-2 mb-28"
      >
        <div className="flex flex-wrap flex-col justify-center w-2/3 lg:w-1/3 bg-[#c7a1fc] p-10 lg:p-16 rounded-xl space-y-12">
          <div className="flex w-full justify-center ">
            <h1 className="flex text-3xl lg:text-5xl text-white font-bold">
              INTERESTED?
            </h1>
          </div>
          <div className="flex w-full ">
            <Link
              to={`https://forms.gle/rwXoyybpenYsGCTX7`}
              className="flex w-full justify-center ring p-8 rounded-xl ring-white hover:bg-[#ccadf9] duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
