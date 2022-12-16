import card from "../../assets/card1.png";
import card2 from "../../assets/card2.png";

export default function About() {
  return (
    <div className="w-full flex mt-20 justify-center">
      <div
        className="h-[209px] bg-cover  w-[1140px] absolute "
        style={{
          backgroundImage: `url(${card})`,
        }}
      >
        <p className="ml-10 mt-10 w-full text-white">
          Lorem ipsum dolor sit amet, consectetur ipcing elit,
        </p>
      </div>
      <div>
        <div
          className="h-[233px] bg-cover w-[456px] absolute ml-32"
          style={{
            backgroundImage: `url(${card2})`,
          }}
        >
          <p className="w-96 ml-10 mt-6 text-white">
            Lorem ipsum dolor sit amet, consectetur ipcing elit, sed do eiusmod
            tempor incididu ut labore et quis nostrud sed do eius .....
          </p>
          <hr className="mt-6 w-96 ml-10 conteiner" />
          <p className="ml-10 mt-6 text-white font-heading">Daniel Kahneman</p>
        </div>
      </div>
    </div>
  );
}
