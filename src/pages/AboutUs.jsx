import Navbar from "../components/Navbar";
import aboutUsImg from "../assets/img-about_us.png";

const Services = () => {
  return (
    <>
      <Navbar />
      <div
        className="max-w-7xl px-2 py-16 grid grid-cols-2 items-center gap-5 mx-auto"
        id="aboutUs"
      >
        <div>
          <h2 className="text-4xl font-bold mb-5">Who Are We?</h2>
          <p className="mb-4">
            At Mylaw, we pride ourselves on being your go-to legal consultants,
            ready to cater to all your legal needs. In just one year since our
            inception, we've achieved an astounding success rate of over 99.8%
            in settling cases, leaving our clients with 100% satisfaction. Our
            combined professional and success fees have exceeded seven hundred
            sixty-five million rupiah, thanks to our expert handling of both
            non-litigation and litigation procedures.
          </p>
          <p className="mb-4">
            Our team at Mylaw is composed of seasoned lawyers who have been
            deeply immersed in the world of corporate and commercial law, debt
            recovery, as well as civil and criminal litigation since 2014.
            Throughout our journey, we've earned the trust of over 120 clients
            who have entrusted us with the responsibility of arbitrating and
            mediating their cases, leading to consistently favorable outcomes.
          </p>
          <p className="mb-4">
            Our lawyers have honed their legal skills across Indonesia and are
            recognized by esteemed institutions such as the Indonesian Advocates
            Association (Perhimpunan Advokat Indonesia - PERADI) and the
            Indonesian Lawyers Association (Asosiasi Advokat Indonesia - AAI).
          </p>
          <p className="mb-4">
            With our extensive expertise in corporate, commercial, civil law,
            and debt recovery, Mylaw is the preferred choice for landlords,
            tenants, businesses of all sizes, private foundations, individuals,
            and families seeking to safeguard their rights and interests. We're
            here to stand by your side and provide the legal support you need.
          </p>
        </div>
        <img src={aboutUsImg} alt="" className="w-1/2 justify-self-end" />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 grid-rows-1 justify-items-center mt-20 mb-32">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-5">Our Vision</h2>
          <p>
            With our extensive expertise in corporate, commercial, civil law,
            and debt recovery, Mylaw is the preferred choice for landlords,
            tenants, businesses of all sizes, private foundations, individuals,
            and families seeking to safeguard their rights and interests. We're
            here to stand by your side and provide the legal support you need.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-5">Our Mission</h2>
          <p>
            With our extensive expertise in corporate, commercial, civil law,
            and debt recovery, Mylaw is the preferred choice for landlords,
            tenants, businesses of all sizes, private foundations, individuals,
            and families seeking to safeguard their rights and interests. We're
            here to stand by your side and provide the legal support you need.
          </p>
        </div>
      </div>
      <div className="w-screen bg-base-100 text-black">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center py-5 h-52">
          <h3 className="text-2xl font-semibold mb-5">
            Want to be apart of MYLAW?
          </h3>
          <a href="mailto:mylaw@gmail.com" className="btn lowercase">
            mylaw@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Services;
