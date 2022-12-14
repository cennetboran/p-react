import cat from "../../assets/cat.png";
import dog from "../../assets/dog.png";
import star from "../../assets/Star 1.png";

export default function Pageheader() {
  return (
    <>
      <div className="flex flex-row h-96 w-full mt-10">
        <div className="basis-5/12">
          <div
            className="flex h-[450px] bg-cover w-[550px] rounded"
            style={{
              backgroundImage: `url(${cat})`,
            }}
          ></div>
          <div
            className="w-96 h-[310px] bg-cover rounded fixed top-56 ml-80 mt-32"
            style={{
              backgroundImage: `url(${dog})`,
            }}
          ></div>
        </div>
        <div className="basis-7/12">
          <svg
            width="39"
            height="39"
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fixed left-1/3 top-72"
          >
            <path
              d="M19.5 0L22.3956 16.6044L39 19.5L22.3956 22.3956L19.5 39L16.6044 22.3956L0 19.5L16.6044 16.6044L19.5 0Z"
              fill="#5BD6E2"
            />
          </svg>

          <h1 className="text-secondary text-7xl w-5/6 font-heading leading-tight">
            We take care of your pet and help them to grow 😍
          </h1>
          <h2 className="text-primary w-3/6 text-base leading-7 mt-10">
            Best pets are waiting for adoption. Find out the the perfect one you
            will like it. It’s our promise.
          </h2>
          <svg
            width="121"
            height="118"
            viewBox="0 0 121 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fixed right-96"
          >
            <circle
              r="52.0125"
              transform="matrix(-1 0 0 1 67.8732 64.5702)"
              stroke="#FABF3E"
              stroke-width="1.5"
            />
            <circle
              r="50.3614"
              transform="matrix(-1 0 0 1 60.4428 58.7915)"
              stroke="#FABF3E"
              stroke-width="1.5"
            />
            <circle
              r="50.3614"
              transform="matrix(-1 0 0 1 51.3613 51.3614)"
              stroke="#FABF3E"
              stroke-width="1.5"
            />
          </svg>
          <button className="p-3 bg-orange-500 rounded text-sm text-white mt-10">
            Contact us
          </button>

          <div className="flex flex-row">
            <svg
              width="70"
              height="71"
              viewBox="0 0 70 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fixed mt-5"
            >
              <g filter="url(#filter0_d_1_50)">
                <path
                  d="M27.7143 22.2294C29.1793 22.7993 31.0213 21.6761 31.8285 19.7207C32.6357 17.7653 32.1024 15.7181 30.6375 15.1483C29.1725 14.5784 27.3306 15.7016 26.5234 17.657C25.7162 19.6124 26.2494 21.6595 27.7143 22.2294Z"
                  fill="url(#paint0_linear_1_50)"
                />
                <path
                  d="M24.8781 34.2883C25.8111 34.8112 26.1016 35.3718 26.3931 35.9342C26.6864 36.5002 26.9807 37.068 27.9318 37.6011C30.7576 39.1848 33.1677 35.7315 32.3697 32.8822C32.1092 31.9519 32.0858 31.0691 32.0638 30.2411C32.0184 28.5333 31.9793 27.0587 29.8783 25.8811C27.7784 24.7042 26.4447 25.4078 24.8994 26.2231C24.149 26.619 23.3488 27.0412 22.3866 27.2871C19.4433 28.0395 17.5701 31.7938 20.3959 33.3775C21.3469 33.9105 22.0006 33.874 22.6523 33.8376C23.2998 33.8014 23.9452 33.7654 24.8781 34.2883Z"
                  fill="url(#paint1_linear_1_50)"
                />
                <path
                  d="M39.0759 19.8608C40.3168 20.8074 40.2358 22.9175 38.8949 24.5738C37.554 26.2301 35.4611 26.8054 34.2202 25.8588C32.9794 24.9121 33.0604 22.802 34.4012 21.1457C35.7421 19.4894 37.835 18.9141 39.0759 19.8608Z"
                  fill="url(#paint2_linear_1_50)"
                />
                <path
                  d="M21.0781 23.9736C22.2586 24.0568 23.3081 22.8857 23.4224 21.3578C23.5367 19.8299 22.6724 18.5238 21.4919 18.4406C20.3115 18.3574 19.2619 19.5286 19.1476 21.0565C19.0334 22.5844 19.8977 23.8904 21.0781 23.9736Z"
                  fill="url(#paint3_linear_1_50)"
                />
                <path
                  d="M40.711 29.1923C41.3754 30.1431 40.8554 31.6111 39.5494 32.4711C38.2435 33.3311 36.6462 33.2575 35.9818 32.3067C35.3173 31.3559 35.8373 29.8879 37.1433 29.0279C38.4492 28.1679 40.0465 28.2415 40.711 29.1923Z"
                  fill="url(#paint4_linear_1_50)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_50"
                  x="0"
                  y="0"
                  width="70"
                  height="71"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="5" dy="9" />
                  <feGaussianBlur stdDeviation="12" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 0.619608 0 0 0 0 0.494118 0 0 0 0.08 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_50"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_50"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1_50"
                  x1="29.6949"
                  y1="17.5617"
                  x2="28.211"
                  y2="44.4649"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.277018" stop-color="#FFCD51" />
                  <stop offset="1" stop-color="#FF926A" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1_50"
                  x1="29.6949"
                  y1="17.5617"
                  x2="28.211"
                  y2="44.4649"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.277018" stop-color="#FFCD51" />
                  <stop offset="1" stop-color="#FF926A" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1_50"
                  x1="29.6949"
                  y1="17.5617"
                  x2="28.211"
                  y2="44.4649"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.277018" stop-color="#FFCD51" />
                  <stop offset="1" stop-color="#FF926A" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_1_50"
                  x1="29.6949"
                  y1="17.5617"
                  x2="28.211"
                  y2="44.4649"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.277018" stop-color="#FFCD51" />
                  <stop offset="1" stop-color="#FF926A" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_1_50"
                  x1="29.6949"
                  y1="17.5617"
                  x2="28.211"
                  y2="44.4649"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.277018" stop-color="#FFCD51" />
                  <stop offset="1" stop-color="#FF926A" />
                </linearGradient>
              </defs>
            </svg>
            <div className="ml-16 mt-7">
              <h3 className="font-heading text-secondary">How to take care</h3>
              <p className="text-primary">
                {" "}
                perfect one you will like it. It’s our promise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
