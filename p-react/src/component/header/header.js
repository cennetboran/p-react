import Navbar from "../header/navbar";
import img from "../../assets/Mew.png";
export default function Header() {
  return (
    <>
      <div className="flex justify-center gap-32">
        <div
          className="flex w-20 h-6 bg-cover mt-4"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
        <div className="flex justify-center items-center gap-12">
          <Navbar />
        </div>
        <div className="border p-3 pl-7 pr-7 rounded border-primary text-secondary font-semibold mt-2">
          <button>Sign up</button>
        </div>
      </div>
    </>
  );
}
