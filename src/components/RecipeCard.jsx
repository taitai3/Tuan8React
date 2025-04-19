
import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import './RecipeCard.css'; 

const RecipeCard = ({ title, img, author, description, isEditorPick = false }) => {
  return (
    <div className="recipe-card">
      {/* Image */}
      <div className="image-wrapper">
        <img src={img} alt={title} className="recipe-image" />
        {/* Play Icon Overlay for Video Recipes */}
        {!isEditorPick && (
          <div className="play-icon">
            <FaPlayCircle className="icon" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {isEditorPick && (
          <>
            <p className="card-description">{description}</p>
            <p className="card-author">{author}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
