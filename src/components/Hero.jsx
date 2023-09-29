const Hero = () => {
  return (
    <div className="hero min-h-[calc(100vh-7rem)]">
      <div className="hero-content text-center text-neutral-focus">
        <div className="max-w-3xl">
          <h1 className="mb-7 text-5xl font-bold">
            Unlocking Legal Success with{" "}
            <span className="text-primary">Mylaw</span>
          </h1>
          <p className="mb-14">Your Trusted Path to Legal Victory</p>
          <div className="w-max mx-auto group transition-all relative">
            <a href="#aboutUs" className="btn btn-outline btn-secondary rounded-none">
              Start Winning Today
            </a>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-10 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-secondary-focus"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
