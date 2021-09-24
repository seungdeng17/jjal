import { atom, selector } from 'recoil';

export const searchState = atom<string>({
  key: 'searchValue',
  default: '',
});

export const crossState = selector<boolean>({
  key: 'searchCross',
  get: ({ get }) => {
    const keyword = get(searchState);
    return !!keyword;
  },
});
