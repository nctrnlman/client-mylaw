import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Strategy = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="py-28 bg-white"
    >
      <div className="px-5 max-w-7xl mx-auto">
        <div className="mb-10 flex justify-center items-center">
          <h2 className="text-primary px-4 py-2 text-4xl md:text-5xl font-bold text-center after:content-[''] after:block after:py-2 after:border-b after:border-secondary after:scale-x-0 hover:after:scale-x-100 after:transition">
            Strong Points
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 justify-items-center grid-rows-4">
          <div className="card w-full bg-secondary text-white grid grid-cols-1 md:grid-cols-[14rem_1fr]">
            <img
              className="h-52 w-full md:max-w-lg object-cover object-center rounded-tl-xl rounded-bl-xl grayscale"
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              alt="Shoes"
            />
            <div className="card-body text-white">
              <h3 className="card-title justify-center md:justify-start text-3xl font-bold text-primary">
                Professional
              </h3>
              <p className="text-white text-center md:text-start md:text-lg">
                We behave with our highes degree of integrity, courtesy, and
                skill with our clients.
              </p>
            </div>
          </div>

          <div className="card w-full bg-secondary text-white grid grid-cols-1 md:grid-cols-[1fr_14rem]">
            <div className="card-body text-white">
              <h3 className="card-title justify-center md:justify-end text-3xl font-bold text-primary">
                Experienced
              </h3>
              <p className="text-gray-text-white text-center md:text-end md:text-lg">
                We are proven to handle your legal needs based on your business
                interest. 99% of our clients is commercial companies, therefore
                we think and act as same as our client. We highly maintain good
                reputation of our clients.
              </p>
            </div>
            <img
              className="h-52 w-full md:max-w-lg object-cover object-center rounded-tr-xl rounded-br-xl grayscale row-start-1 md:col-start-2"
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt="Shoes"
            />
          </div>

          <div className="card w-full bg-secondary text-white grid grid-cols-1 md:grid-cols-[14rem_1fr]">
            <img
              className="h-52 w-full md:max-w-lg object-cover object-center rounded-tl-xl rounded-bl-xl grayscale"
              src="https://images.unsplash.com/photo-1638262052640-82e94d64664a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt="Shoes"
            />
            <div className="card-body text-white">
              <h3 className="card-title justify-center md:justify-start text-3xl font-bold text-primary">
                Trustworthy
              </h3>
              <p className="text-white text-center md:text-start md:text-lg">
                We are trustworthy for your legal needs. Dont worry about the
                result we are already handling more than 50 clients.
              </p>
            </div>
          </div>

          <div className="card w-full bg-secondary text-white grid grid-cols-1 md:grid-cols-[1fr_14rem]">
            <div className="card-body text-white">
              <h3 className="card-title justify-center md:justify-end text-3xl font-bold text-primary">
                Efficient & Efective
              </h3>
              <p className="text-white text-center md:text-end md:text-lg">
                We work efficient and efectively. No need to worry about adding
                fees, we prevent unnecessary cost and fee.
              </p>
            </div>
            <img
              className="h-52 w-full md:max-w-lg object-cover object-center rounded-tr-xl rounded-br-xl grayscale row-start-1 md:col-start-2"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt="Shoes"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Strategy;
