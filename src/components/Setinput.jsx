import React from 'react';

export default function Setinput({ index, set, updateSet }) {
  return (
    <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg shadow-md w-full max-w-sm mx-auto">
      <span className="text-black font-semibold">Set{index + 1} : </span>

      <input
        type="number"
        name="reps"
        placeholder="Reps"
        value={set.reps}
        onChange={(e) => updateSet(index, 'reps', e.target.value)}
        style={{width:"100px",
        borderRadius:'5px'

        }}
      />

      <input
        type="number"
        name="weight"
        placeholder="Weight"
        value={set.weight}
        onChange={(e) => updateSet(index, 'weight', e.target.value)}
        style={{width:"100px",
        borderRadius:'5px'

        }} />
    </div>
  );
}