import React, { useState } from 'react';

const InputData = () => {
  const [input, setInput] = useState('');
  console.log(input);
  return (
    <div className="jopa">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="kum"
      />
      <div>hello world</div>
    </div>
  );
};

export default InputData;
