import { useState, useEffect } from 'react';

const globalId = 0;
const genId = () => globalId + 1;

export const useId = () => {
  const [id, setId] = useState<number | null>(null);

  useEffect(() => setId(genId()), []);

  return id;
};
