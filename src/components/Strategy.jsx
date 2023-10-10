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
        <div className="grid grid-cols-4 gap-5 justify-items-center grid-rows-2 text-center">
          <div className="card w-full bg-primary text-primary-content">
            <div className="card-body">
              <h3 className="card-title justify-center">Professional</h3>
              <p className="text-sm text-gray-300">
                We behave with our highes degree of integrity, courtesy, and
                skill with our clients
              </p>
            </div>
          </div>
          <div className="card w-full bg-primary text-primary-content">
            <div className="card-body">
              <h3 className="card-title justify-center">Experienced</h3>
              <p className="text-sm text-gray-300">
                We are proven to handle your legal needs based on your business
                interest. 99% of our clients is commercial companies, therefore
                we think and act as same as our client. We highly maintain good
                reputation of our clients as well as prevent unnecessary cost
                and fee.
              </p>
            </div>
          </div>
          <div className="card w-full bg-primary text-primary-content">
            <div className="card-body">
              <h3 className="card-title justify-center">Trustworthy</h3>
              <p className="text-sm text-gray-300">
                We are trustworthy for your legal needs. Dont worry about the
                result we are already handling more than 50 clients.
              </p>
            </div>
          </div>
          <div className="card w-full bg-primary text-primary-content">
            <div className="card-body">
              <h3 className="card-title justify-center">
                Efficient & Efective
              </h3>
              <p className="text-sm text-gray-300">
                We work efficient and efectively. No need to worry about adding
                fees, without adding fees we work efficient & efectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
