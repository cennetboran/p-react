import Header from "../header/header";
import Pageheader from "../pageHeader/pageheader";
import About from "../about/about";

export default function Homepage() {
  return (
    <div className="min-w-full">
      <Header />
      <div className="">
        <Pageheader />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}
