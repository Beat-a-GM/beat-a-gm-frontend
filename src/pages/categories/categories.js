import React from "react";
import './categories.css';

export default function Categories() {
    const categories = [
        {
            "href": "/categories/1",
            "title": "Category 1",
            "puzzles_ids": ["234", "235", "236", "237", "238"]
        },
        {
            "href": "/categories/2",
            "title": "Category 2",
            "puzzles_ids": ["239", "240", "241", "242", "243"]

        },
        {
            "href": "/categories/3",
            "title": "Category 3",
            "puzzles_ids": ["244", "245", "246", "247", "248"]
        },
        {
            "href": "/categories/4",
            "title": "Category 4",
            "puzzles_ids": ["249", "250", "251", "252", "253"]
        },
        {
            "href": "/categories/5",
            "title": "Category 5",
            "puzzles_ids": ["254", "255", "256", "257", "258"]
        },
        {
            "href": "/categories/6",
            "title": "Category 6",
            "puzzles_ids": ["259", "260", "261", "262", "263"]
        }
    ]
        ;


    return (
        <div className="categoriespage">
            <div className="categories">
                {
                    categories.map(category => (
                        <div className="category">
                            <a href={category.href} >{category.title}</a>
                            <ul>
                                {category.puzzles_ids && category.puzzles_ids.length > 0 &&

                                    category.puzzles_ids.map(id => (
                                        <li>
                                            <a href={category.href + "/" + id} key={id}>Puzzle {id}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }

            </div>


        </div>
    );
}