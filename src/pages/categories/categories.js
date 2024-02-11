import React from "react";
import './categories.css';

export default function Categories() {
    const categories = [
        {
            "href": "/categories/1",
            "imgSrc": "/category1.png",
            "alt": "Category 1",
            "title": "Category 1"
        },
        {
            "href": "/categories/2",
            "imgSrc": "/category2.png",
            "alt": "Category 2",
            "title": "Category 2"
        },
        {
            "href": "/categories/3",
            "imgSrc": "/category3.png",
            "alt": "Category 3",
            "title": "Category 3"
        },
        {
            "href": "/categories/4",
            "imgSrc": "/category4.png",
            "alt": "Category 4",
            "title": "Category 4"
        },
        {
            "href": "/categories/5",
            "imgSrc": "/category5.png",
            "alt": "Category 5",
            "title": "Category 5"
        },
        {
            "href": "/categories/6",
            "imgSrc": "/category6.png",
            "alt": "Category 6",
            "title": "Category 6"
        }
    ]
        ;


    return (
        <div className="categoriespage">
            <div className="categories">
                {
                    categories.map(category => (
                        <a key={category.href} href={category.href} className="category">
                            <img src={category.imgSrc} alt={category.alt} />
                            <h3>{category.title}</h3>
                        </a>
                    ))
                }

            </div>


        </div>
    );
}