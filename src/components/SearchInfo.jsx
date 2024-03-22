import React from 'react';

export default function SearchInfo() {
  return (
    <div className="d-md-flex gap-3">
        <select 
            name="dinosaur-name" 
            id="dinosaur-name" 
            className="px-2 border-1 bg-light rounded-1 text-center"
        >
            <option value="name">name</option>
        </select>

        <select name="country" id="country" className="px-2 border-1 bg-light rounded-1 text-center">
            <option value="country">country</option>
        </select>

        <input 
            type="number" 
            id="min-weight" 
            name="min-weight" 
            placeholder="min-weight" 
            className="px-2 border-1 bg-light rounded-1 text-center col-1" 
        />

        <input 
            type="number" 
            id="max-weight" 
            name="max-weight" 
            placeholder="max-weight" 
            className="px-2 border-1 bg-light rounded-1 text-center col-1" 
        />

        <select name="diet-type" id="diet-type" className="px-2 border-1 bg-light rounded-1 text-center">
            <option value="diet">diet</option>
            <option value="omnivorous">omnivorous</option>
            <option value="carnivorous">carnivorous</option>
            <option value="herbivorous">herbivorous</option>
        </select>

        <input 
            type="number" 
            id="min-length" 
            name="min-length" 
            placeholder="min-length" 
            className="px-2 border-1 bg-light rounded-1 text-center col-1"
        />

        <input 
            type="number" 
            id="max-length" 
            name="max-length" 
            placeholder="max-length" 
            className="px-2 border-1 bg-light rounded-1 text-center col-1"
        />

        <input id="search" placeholder="Search..." className="btn text-white text-bg-info col-1" />
    </div>
  );
}