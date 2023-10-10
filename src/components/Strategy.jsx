const Strategy = () => {
  return (
    <div className="py-28 bg-white">
      <div className="px-2 max-w-7xl mx-auto">
        <div className="mb-10 flex justify-center items-center">
          <h2 className="text-primary px-4 py-2 text-4xl font-bold text-center after:content-[''] after:block after:py-2 after:border-b after:border-secondary after:scale-x-0 hover:after:scale-x-100 after:transition">
            Strong Points
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 justify-items-center grid-rows-4">
          <div className="card w-full bg-secondary-content text-primary-content grid grid-cols-[14rem_1fr]">
            <img
              className="h-52 w-full max-w-lg object-cover object-center rounded-tl-xl rounded-bl-xl grayscale"
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              alt="Shoes"
            />
            <div className="card-body text-primary">
              <h3 className="card-title justify-start text-3xl font-bold">
                Professional
              </h3>
              <p className="text-primary">
                We behave with our highes degree of integrity, courtesy, and
                skill with our clients
              </p>
            </div>
          </div>

          <div className="card w-full bg-secondary-content text-primary-content grid grid-cols-[1fr_14rem]">
            <div className="card-body text-primary">
              <h3 className="card-title justify-end text-3xl font-bold">
                Experienced
              </h3>
              <p className="text-gray-text-primary text-end">
                We are proven to handle your legal needs based on your business
                interest. 99% of our clients is commercial companies, therefore
                we think and act as same as our client. We highly maintain good
                reputation of our clients as well as prevent unnecessary cost
                and fee.
              </p>
            </div>
            <img
              className="h-52 w-full max-w-lg object-cover object-center rounded-tr-xl rounded-br-xl grayscale"
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt="Shoes"
            />
          </div>

          <div className="card w-full bg-secondary-content text-primary-content grid grid-cols-[14rem_1fr]">
            <img
              className="h-52 w-full max-w-lg object-cover object-center rounded-tl-xl rounded-bl-xl grayscale"
              src="https://images.unsplash.com/photo-1638262052640-82e94d64664a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt="Shoes"
            />
            <div className="card-body text-primary">
              <h3 className="card-title justify-start text-3xl font-bold">
                Trustworthy
              </h3>
              <p className="text-primary">
                We are trustworthy for your legal needs. Dont worry about the
                result we are already handling more than 50 clients.
              </p>
            </div>
          </div>

          <div className="card w-full bg-secondary-content text-primary-content grid grid-cols-[1fr_14rem]">
            <div className="card-body text-primary">
              <h3 className="card-title justify-end text-3xl font-bold">
                Efficient & Efective
              </h3>
              <p className="text-primary text-end">
                We work efficient and efectively. No need to worry about adding
                fees, without adding fees we work efficient & efectively.
              </p>
            </div>
            <img
              className="h-52 w-full max-w-lg object-cover object-center rounded-tr-xl rounded-br-xl grayscale"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt="Shoes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
