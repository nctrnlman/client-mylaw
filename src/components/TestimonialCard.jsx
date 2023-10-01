import React from "react";
const TestimonialCard = ({ clientName, position, testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-primary">{clientName}</h3>
        <p className="text-gray-600">{position}</p>

        <div className="border-b-2 border-primary my-2"></div>
      </div>
      <p className="">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
