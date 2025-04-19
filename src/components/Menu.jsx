// Menu.jsx
import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import './Menu.css'; 

const Menu = () => {
  const [summerRecipes, setSummerRecipes] = useState([]);
  const [videoRecipes, setVideoRecipes] = useState([]);
  const [editorPicks, setEditorPicks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/summerRecipes')
      .then(res => res.json())
      .then(data => setSummerRecipes(data));

    fetch('http://localhost:3000/videoRecipes')
      .then(res => res.json())
      .then(data => setVideoRecipes(data));

    fetch('http://localhost:3000/editorPicks')
      .then(res => res.json())
      .then(data => setEditorPicks(data));
  }, []);

  return (
    <div className="menu-wrapper">
      {/* This Summer Recipes Section */}
      <section className="section">
        <h2 className="title">This Summer Recipes</h2>
        <p className="subtitle">We have all your Independence Day sweets covered!</p>
        <div className="grid-4">
          {summerRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} title={recipe.title} img={recipe.img} />
          ))}
        </div>
      </section>

      {/* Recipes With Videos Section */}
      <section className="section">
        <h2 className="title">Recipes With Videos</h2>
        <p className="subtitle">Cooking Up Culinary Creations with Step-by-Step Videos</p>
        <div className="grid-4">
          {videoRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} title={recipe.title} img={recipe.img} />
          ))}
        </div>
      </section>

      {/* Editor's Pick Section */}
      <section className="section">
        <h2 className="title">Editor's Pick</h2>
        <p className="subtitle">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
        <div className="grid-4">
          {editorPicks.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              img={recipe.img}
              author={recipe.author}
              description={recipe.description}
              isEditorPick
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
