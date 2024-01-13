import Img from "../../images/desktop/image-interactive.jpg";

const About = () => {
  return (
    <div className='container relative py-24 mx-auto'>
      <div>
        <img src={Img} alt='' className='w-auto' />
        <div className='laptop:absolute block bg-white left-[50%] bottom-[5%] p-16 laptop:text-left text-center'>
          <h1 className='uppercase text-[35px] font-light pb-5 tracking-wide'>
            The leader in <br /> interactive vr
          </h1>
          <p className='font-medium text-gray-400'>
            Founded in 2011, Loopstudios has been producing world-class <br />
            virtual reality projects for some of the best companies around the{" "}
            <br />
            globe. Our award-winning creations have transformed <br />{" "}
            businesses through digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
