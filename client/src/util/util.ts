import Progress from 'rsup-progress';

const progress = new Progress({
  color: '#54a0ff',
  zIndex: 100000,
});

export const defer = (ms: number) => progress.promise(new Promise((res) => setTimeout(res, ms)));
