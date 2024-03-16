import { RadioGroup } from "../components";

const BookCar = () => {
  return (
    <div className="max-w-[900px] m-auto">
      <div className="flex flex-col break-words items-center justify-center">
        <h3 className="mb-3">
          AIRPORT - LING UNG PAGODA - INTERCONTINENTAL RESORTS - DANANG (ROUND
          TRIP)
        </h3>
        <img
          className="max-lg:w-auto rounded-2xl"
          src="/src/assets/car1.jpg"
          alt="carview"
          width={800}
        />
      </div>

      <div className="flex flex-row justify-around">
        <div className="w-[60%] border-spacing-4 break-words mt-6 mb-6 border-2 rounded-2xl p-5">
          <p>
            <h6 className="font-semibold">Highlights</h6>
            <br />
            • Enjoy quick luxury transfers between Hong Kong's prime attractions
            in a comfortable Toyota Alphard <br />• Travel to Dragon's Back
            Trail, Sheung Wan Macau Ferry Terminal, Kai Tak Terminal, Che Kung
            Temple, Lantau Island Citygate and more! <br />• Rest assured that
            the entire fleet is held to the highest safety standards and benefit
            from chauffeur service <br />• The transfer is suitable for a group
            of up to 6 people and is inclusive all the fees and highway tolls
          </p>
        </div>
        <div className="flex flex-col w-[30%] border-spacing-4 break-words mt-6 mb-6 border-2 rounded-2xl p-5 justify-center">
          <RadioGroup />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Book Now !!!
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCar;
