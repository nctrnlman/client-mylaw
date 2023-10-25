import CountUp from "react-countup";

const Summary = () => {
  return (
    <div className="w-screen bg-primary">
      <div className="p-5 max-w-7xl flex justify-around items-center mx-auto text-white">
        <div className="stat w-min">
          <div className="stat-value">
            <CountUp end={50} />+
          </div>
          <div className="stat-title text-gray-300">Clients</div>
        </div>
        <div className="divider divider-horizontal after:bg-gray-400 before:bg-gray-400"></div>
        <div className="stat w-min">
          <div className="stat-value">
            <CountUp end={120} />+
          </div>
          <div className="stat-title text-gray-300">Services</div>
        </div>
        <div className="divider divider-horizontal after:bg-gray-400 before:bg-gray-400"></div>
        <div className="stat w-min">
          <div className="stat-value">
            <CountUp end={99.8} />%
          </div>
          <div className="stat-title text-gray-300">Cases Settled</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
