'use client'
import { useState, useEffect } from 'react';

export default function AnimalClassifier() {
  const [concepts, setConcepts] = useState([]);

  useEffect(() => {
    // Fetch from the API route we just created
    const fetchConcepts = async () => {
      const res = await fetch('/api/classifyAnimal');
      const data = await res.json();
      setConcepts(data.concepts);
    };

    fetchConcepts();
  }, []);

  return (
    <div>
      <h1>Animal Classification Results</h1>
      <ul>
        {concepts.map((concept) => (
          <li key={concept.id}>{concept.name} - {concept.value.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
}
