import { useState } from 'react'

function CatCard({ image, breed, origin, lifeSpan, onAttributeClick }) {
    return (
      <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16, marginTop: 20 }}>
        <img src={image} alt={breed} style={{ width: 300, borderRadius: 8 }} />
  
        <h2 
          onClick={() => onAttributeClick(breed)} 
          style={{cursor: "pointer", color: "white"}}
        >
          Breed: {breed}
        </h2>
  
        <p 
          onClick={() => onAttributeClick(origin)} 
          style={{cursor: "pointer", color: "white"}}
        >
          Origin: {origin}
        </p>
  
        <p 
          onClick={() => onAttributeClick(lifeSpan)} 
          style={{cursor: "pointer", color: "white"}}
        >
          Life Span: {lifeSpan} years
        </p>
      </div>
    );
  }
  

export default CatCard