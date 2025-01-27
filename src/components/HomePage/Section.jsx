import React from 'react';

const categories = [
  { id: 1, title: 'Tax Planning', description: 'Optimize your tax strategy with our expert guidance.' },
  { id: 2, title: 'Accounting Services', description: 'Professional accounting services to keep your business on track.' },
  { id: 3, title: 'Business Consulting', description: 'Strategic advice to grow and improve your business.' },
  { id: 4, title: 'Tax Planning', description: 'Optimize your tax strategy with our expert guidance.' },
  { id: 5, title: 'Accounting Services', description: 'Professional accounting services to keep your business on track.' },
  { id: 6, title: 'Business Consulting', description: 'Strategic advice to grow and improve your business.' }
];

const Section = () => {
  return (
    <div className="section-container py-16 bg-gray-100">
      <div className="section-header text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Expertise at Your Service</h2>
        <p className="subtitle text-lg text-gray-700">Expert guidance for your tax, accounting, and business needs.</p>
      </div>
      <div className="categories grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {categories.map((category) => (
          <div className="category-card bg-white p-6 rounded-lg shadow-md text-center" key={category.id}>
            <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
            <p className="mb-6 text-gray-600">{category.description}</p>
            <button className="know-more-button bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">Know More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
