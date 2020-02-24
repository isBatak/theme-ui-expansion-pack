import { useState, useEffect } from '../forms/Switch/node_modules/react';

const globalId = 0;
const genId = () => globalId + 1;

export const useId = () => {
  const [id, setId] = useState(null);

  useEffect(() => setId(genId()), []);

  return id;
};
