import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <div className="flex border p-2 bg-[#F3F3F3] rounded-lg mt-2">
      <button className="btn px-8 font-bold text-white bg-[#D72050] hover:bg-[#D72050]">
        Latest
      </button>
      <Marquee>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default Marque;
