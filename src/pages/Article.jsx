import Navbar from "../components/Navbar";
import Image1 from "../assets/articles-img/article-1.jpeg";
import Image2 from "../assets/articles-img/article-2.jpeg";
import Image3 from "../assets/articles-img/article-3.jpeg";
import bg from "../assets/img2-compress.jpg";
import { useState } from "react";
import Pagination from "../components/Pagination";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const newsArticles = [
  {
    id: 1,
    image: Image1,
    title: "New Indonesian Law Affects Tax Regulations",
    date: "September 18, 2023",
    category: "Legal Updates",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 2,
    image: Image2,
    title: "Changes in Environmental Regulations in Indonesia",
    date: "September 17, 2023",
    category: "Legal Updates",
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
    category: "Events",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 5,
    image: Image1,
    title: "Legal Implications of Technology Advancements in Indonesia",
    date: "September 14, 2023",
    category: "Events",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 6,
    image: Image2,
    title: "New Intellectual Property Laws in Indonesia",
    date: "September 13, 2023",
    category: "News",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 7,
    image: Image1,
    title: "Recent Environmental Lawsuits in Indonesia",
    date: "September 12, 2023",
    category: "News",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 8,
    image: Image2,
    title: "Challenges in Contract Law for Indonesian Businesses",
    date: "September 11, 2023",
    category: "Events",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor odio nec quam auctor, eget cursus justo congue. Maecenas tincidunt ex eu sem dictum, in vehicula libero auctor.",
  },
  {
    id: 9,
    image: Image1,
    title: "Impact of Labor Law Reforms in Indonesia",
    date: "September 10, 2023",
    category: "News",
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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  // Filter articles based on the selected category
  const filteredArticles =
    selectedCategory === "All"
      ? newsArticles
      : newsArticles.filter((article) => article.category === selectedCategory);

  // Calculate the total number of pages based on the number of articles and articlesPerPage
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  // Function to handle page changes
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Calculate the start index and end index for displaying articles
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;

  // Slice the articles for the current page
  const displayedArticles = filteredArticles.slice(startIndex, endIndex);

  return (
    <>
      <Navbar />

      <div className="relative">
        {/* Header Banner */}
        <div
          className="w-full h-[50vh] mt-[100px] relative"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundColor: ``,
            backgroundSize: "cover",
          }}
        >
          <div className="hero-overlay bg-secondary opacity-50"></div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="text-primary text-4xl md:text-7xl font-bold absolute top-40 left-20 "
          >
            News & Insight
          </motion.div>
        </div>

        {/* Category Section */}
        <div className="py-4 text-center my-6 mx-2 md:mx-56 rounded-lg">
          <h1 className="text-2xl md:text-4xl font-semibold text-primary mb-2">
            Categories
          </h1>
          <ul className="flex flex-row md:flex-row space-y-0 space-x-3 md:space-y-0 md:space-x-4 justify-center pt-2">
            <li
              className={`text-primary hover:text-secondary cursor-pointer ${
                selectedCategory === "All" ? "font-semibold" : ""
              }`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </li>
            <li
              className={`text-primary hover:text-secondary cursor-pointer ${
                selectedCategory === "Legal Updates" ? "font-semibold" : ""
              }`}
              onClick={() => setSelectedCategory("Legal Updates")}
            >
              Legal Updates
            </li>
            <li
              className={`text-primary hover:text-secondary cursor-pointer ${
                selectedCategory === "News" ? "font-semibold" : ""
              }`}
              onClick={() => setSelectedCategory("News")}
            >
              News
            </li>
            <li
              className={`text-primary hover:text-secondary cursor-pointer ${
                selectedCategory === "Events" ? "font-semibold" : ""
              }`}
              onClick={() => setSelectedCategory("Events")}
            >
              Events
            </li>
          </ul>
        </div>
        {/* News Articles */}
        <div className="container mx-auto py-6 mt-4">
          {displayedArticles.map((article) => (
            <div key={article.id} className="mb-8">
              <div className="flex flex-wrap justify-center items-center">
                {/* Card Container */}
                <div className="w-full md:w-4/5 p-2 relative md:flex rounded-lg shadow-lg">
                  {/* Left Column - Image */}
                  <div className="w-full md:w-1/2 h-36 md:h-auto relative max-w-md">
                    <div
                      className="relative overflow-hidden h-full"
                      style={{
                        paddingBottom: "0", // Remove the paddingBottom
                      }}
                    >
                      <img
                        src={article.image}
                        alt="Article Image"
                        className="absolute top-0 left-0 w-full h-full object-cover object-center transition-transform hover:scale-105 rounded-lg"
                        style={{
                          objectFit: "cover", // Add objectFit property
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </div>

                  {/* Right Column - Article Content */}
                  <div className="w-full md:w-1/2 p-4 bg-white rounded-r-lg">
                    <h1 className="md:text-2xl text-lg font-bold text-blue mb-2">
                      {article.title}
                    </h1>
                    <p className="text-blue mb-2">{article.date}</p>
                    <div className="mt-2 text-justify">
                      <p>{article.content}</p>
                    </div>
                    <a
                      href={`/article/${article.id}`}
                      className="inline-flex items-center justify-center bg-primary text-white hover:bg-secondary hover:text-white border rounded mt-2 py-2 px-4 text-[15px]"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}

export default Article;
