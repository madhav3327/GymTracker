import React, { useState } from 'react';
import workouts from '../data/workout';
import Setinput from './Setinput';


export default function Home() {
  const [category, setCategory] = useState('chest');
  const [index, setIndex] = useState(0);
  const currentExercise = workouts[category][index];
  const [sets, setSets] = useState([
    { reps: '', weight: '' },
    { reps: '', weight: '' },
    { reps: '', weight: '' },
  ]);

  const handleSetChange = (index, field, value) => {
    const updated = [...sets];
    updated[index][field] = value;
    setSets(updated);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-2 text-white">
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {Object.keys(workouts).map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              setIndex(0);
              setSets([
                { reps: '', weight: '' },
                { reps: '', weight: '' },
                { reps: '', weight: '' },
              ]);
            }}
            className={`px-4 py-1 rounded-full border text-sm ${
              category === cat
                ? "btn btn-success"
                : "btn btn-light"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Main Card */}
      <div className="bg-white text-black rounded-lg p-2 shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-2">{currentExercise.name}</h2>
        <img
          src={currentExercise.image}
          alt={currentExercise.name}
          className="w-full h-48 object-contain rounded mb-4"
        />

        <div className="flex justify-between mb-4">
          <button
            onClick={() => index > 0 && setIndex(index - 1)}
            disabled={index === 0}
            className=" btn btn-outline-success"
          >
            Previous
          </button>
          <button
            onClick={() =>
              index < workouts[category].length - 1 && setIndex(index + 1)
            }
            disabled={index === workouts[category].length - 1}
            className="p btn btn-outline-success"
          >
            Next
          </button>
        </div>

        {/* Set Inputs */}
        <div className="space-y-3 mt-4">
          {sets.map((set, index) => (
            <Setinput
              key={index}
              index={index}
              set={set}
              updateSet={handleSetChange}
            />
          ))}
        </div>

        <button
          onClick={() => setSets([...sets, { reps: '', weight: '' }])}
          className="w-full bg-blue-500 text-black py-2 rounded hover:bg-blue-600 mb-2 btn btn-primary"
        >
          ➕ Add Set
        </button>

        <button
          onClick={() => {
            console.log('Workout Complete', sets);
            alert('Workout Submitted 💪');
          }}
          className="w-full bg-green-600 text-black py-2 rounded hover:bg-green-700 btn btn-success"
        >
          Finish Workout
        </button>
      </div>
    </div>
  );
}