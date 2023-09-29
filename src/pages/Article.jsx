import Navbar from "../components/Navbar";
import Image1 from "../assets/articles-img/article-1.jpeg";
import Image2 from "../assets/articles-img/article-2.jpeg";
import Image3 from "../assets/articles-img/article-3.jpeg";
import { useState } from "react";

const newsArticles = [
  {
    id: 1,
    image: Image1,
    title: "New Indonesian Law Affects Tax Regulations",
    date: "September 18, 2023",
    category: "News",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 2,
    image: Image2,
    title: "Changes in Environmental Regulations in Indonesia",
    date: "September 17, 2023",
    category: "News",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 3,
    image: Image3,
    title: "New Data Privacy Regulations in Indonesia",
    date: "September 16, 2023",
    category: "Legal Updates",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 4,
    image: Image2,
    title: "Indonesian Government Announces Trade Policy Changes",
    date: "September 15, 2023",
    category: "News",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 5,
    image: Image1,
    title: "Legal Implications of Technology Advancements in Indonesia",
    date: "September 14, 2023",
    category: "Legal Updates",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 6,
    image: Image2,
    title: "New Intellectual Property Laws in Indonesia",
    date: "September 13, 2023",
    category: "Legal Updates",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 7,
    image: Image1,
    title: "Recent Environmental Lawsuits in Indonesia",
    date: "September 12, 2023",
    category: "Legal Updates",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 8,
    image: Image2,
    title: "Challenges in Contract Law for Indonesian Businesses",
    date: "September 11, 2023",
    category: "Legal Updates",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 9,
    image: Image1,
    title: "Impact of Labor Law Reforms in Indonesia",
    date: "September 10, 2023",
    category: "Legal Updates",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 10,
    image: Image2,
    title: "New Regulations for Foreign Investments in Indonesia",
    date: "September 9, 2023",
    category: "Legal Updates",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
];
function Article() {
  const [currentCategory, setCurrentCategory] = useState("All");

  const filteredArticles =
    currentCategory === "All"
      ? newsArticles
      : newsArticles.filter((article) => article.category === currentCategory);

  return (
    <>
      <Navbar />
      <div className="relative ">
        {/* Header Banner */}
        <div
          className="w-full h-96 relative"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5), transparent, transparent, transparent)`,
            backgroundColor: `#005289`,
            backgroundSize: "200% 100%",
            animation: "gradientAnimation 5s linear infinite",
          }}
        >
          <div className="text-white text-5xl font-bold absolute top-40 left-20 ">
            News & Insight
          </div>
        </div>

        {/* News Articles */}
        <div className="container mx-auto py-6 mt-4 flex justify-around ">
          <div className="pl-10">
            {filteredArticles.map((article) => (
              <div key={article.id} className="mb-8">
                <div className="flex flex-wrap items-center ">
                  {/* Left Column - Image */}
                  <div className="w-full md:w-1/4 relative">
                    <div
                      className="relative overflow-hidden"
                      style={{
                        paddingBottom: "56.25%", // Rasio 16:9 (9 / 16 * 100%)
                      }}
                    >
                      <img
                        src={article.image}
                        alt="Article Image"
                        className="absolute top-0 left-0 w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Right Column - Article Content */}
                  <div className="w-full md:w-3/4 p-4">
                    <h1 className="text-2xl font-bold text-blue mb-2">
                      {article.title}
                    </h1>
                    <p className="text-blue mb-2">{article.date}</p>
                    <div className="mt-2 text-justify">
                      <p>{article.content}</p>
                    </div>
                    <a
                      href={`/article/${article.id}`}
                      className="text-primary mt-3 text-xs"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 border border-primary w-[210px] mx-10 max-h-[230px] overflow-y-auto">
            <h2 className="text-3xl text-primary font-bold mb-4">Categories</h2>
            <div className="flex flex-col text-left">
              <div
                className={`text-black py-2 mb-2 hover:text-primary hover:cursor-pointer transition duration-300 rounded ${
                  currentCategory === "All" && "font-bold text-primary"
                }`}
                onClick={() => setCurrentCategory("All")}
              >
                All
              </div>
              <div
                className={`text-black py-2 mb-2 hover:text-primary hover:cursor-pointer transition duration-300 rounded ${
                  currentCategory === "Legal Updates" &&
                  "font-bold text-primary"
                }`}
                onClick={() => setCurrentCategory("Legal Updates")}
              >
                Legal Updates
              </div>
              <div
                className={`text-black py-2 mb-2 hover:text-primary hover:cursor-pointer transition duration-300 rounded ${
                  currentCategory === "News" && "font-bold text-primary"
                }`}
                onClick={() => setCurrentCategory("News")}
              >
                News
              </div>
              {/* Add more categories as needed */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
