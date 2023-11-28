import React from "react";
const TestimonialCard = ({ clientName, position, testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <h3 className="text-xl md:text-2xl font-bold text-primary">
          {clientName}
        </h3>
        <p className="text-gray-600 md:text-lg">{position}</p>

        <div className="border-b-2 border-secondary my-2"></div>
      </div>
      <p className="md:text-lg text-justify">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
