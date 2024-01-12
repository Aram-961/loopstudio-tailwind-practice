import dataCreator from "../../data/dummyData";
import "./Creator.css";

const Creator = () => {
  return (
    <div className='container mx-auto mb-24'>
      <div className='flex justify-between'>
        <h1 className='text-4xl font-light uppercase'>Our Creations</h1>
        <button className='border-[1px] border-black p-[1.5px] px-10 uppercase tracking-wide'>
          see all
        </button>
      </div>
      <div className='grid grid-cols-4 gap-[15px] mt-10'>
        {dataCreator.map((data) => (
          <div className='relative' style={{ width: "100%" }}>
            <div className='absolute inset-0 bg-black bg-opacity-30' />
            <img src={data.img} alt='' className="w-full" />{" "}
            <div className='absolute bottom-10 left-5'>
              <h1 className='text-4xl font-light text-white w-36'>
                {data.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creator;
