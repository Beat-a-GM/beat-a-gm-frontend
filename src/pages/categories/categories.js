import React, { useState, useEffect } from "react";
import './categories.css';

export default function Categories({ games }) {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://beat-a-gm-backend.vercel.app/categories')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Categories fetched:', data);
                setCategories(data);
                setIsLoading(false); // Set loading to false after fetching
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>; // Show a loading indicator while fetching
    }

    return (
        <div className="categoriespage">
            <div className="categories">
                {categories.map((category, index) => (
                    <div key={index} className="category">
                        <h1>{category}</h1>
                        <div className="games">
                            {games.filter(game => game.category === category).map((game, index) => (
                                <div key={index} className="game">
                                    <a href={"/play/" + game.id}>{game.white_username} vs {game.black_username} {game.id}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
