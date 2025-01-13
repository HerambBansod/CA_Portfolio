import React from "react";
import "./Section.css";

const categories = [
    { id: 1, title: "Category 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 2, title: "Category 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 3, title: "Category 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 4, title: "Category 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 5, title: "Category 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 6, title: "Category 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

const Section = () => {
    return (
        <div className="section-container">
            <div className="section-header">
                <h2>Our Expertise at Your Service</h2>
                <p className="subtitle">Expert guidance for your tax, accounting, and business needs.</p>
            </div>
            <div className="categories">
                {categories.map((category) => (
                    <div className="category-card" key={category.id}>
                        <h3>{category.title}</h3>
                        <p>{category.description}</p>
                        <button className="know-more-button">Know More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section;
