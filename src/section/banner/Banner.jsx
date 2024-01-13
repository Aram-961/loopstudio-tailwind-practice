import "./Banner.css";
import Nav from "../../components/navbar/Nav";

const Banner = () => {
  return (
    <div className='pb-24 hero__banner'>
      <div className='container mx-auto'>
        <Nav />
        <div className='p-2 px-5 border-[1px] border-white laptop:w-[35%] my-16 w-fit mx-auto tablet:mx-0'>
          <h1 className='font-light text-white uppercase text-[50px] leading-tight'>
            Immersive
            <br /> experiences
            <br /> that deliver
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
