import fb from "../../images/icon-facebook.svg";
import x from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";

const Footer = () => {
  const mediaIcons = [
    {
      img: fb,
    },

    {
      img: x,
    },

    {
      img: pinterest,
    },

    {
      img: instagram,
    },
  ];
  return (
    <div className='p-5 py-10 bg-black'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between pb-5'>
          <h1 className='text-xl font-semibold text-white'>loopStudios</h1>
          <div className='flex gap-0'>
            {mediaIcons.map((icon, index) => (
              <>
                <img key={index} src={icon.img} alt='icon' className='mr-4' />{" "}
              </>
            ))}
          </div>
        </div>
        <div className='flex justify-between text-white'>
          <div className="flex space-x-5">
            <div>About</div>
            <div>Careers</div>
            <div>Events</div>
            <div>Products</div>
            <div>Support</div>
          </div>
          <h1 className="font-light text-gray-400">© 2021 Loopstudios. All rights reserved.</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
