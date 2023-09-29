import strategySteps from "../assets/strategy.png";

const Strategy = () => {
  return (
    <div className="py-28 bg-white">
      <div className="px-2 max-w-7xl mx-auto">
        <div className="mb-10 flex justify-center items-center">
          <h2 className="text-primary px-4 py-2 text-4xl font-bold text-center after:content-[''] after:block after:py-2 after:border-b after:border-secondary after:scale-x-0 hover:after:scale-x-100 after:transition">
            Strong Points
          </h2>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 place-content-center">
          <img
            src={strategySteps}
            alt="strategy steps"
            className="w-full h-auto object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Strategy;
