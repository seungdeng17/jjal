import { useRecoilState, useRecoilValue } from 'recoil';
import { searchState, crossState } from '@store/search';
import styled from 'styled-components';

import { BiSearch } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useRecoilState(searchState);
  const isActiveCross = useRecoilValue(crossState);

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => setSearchValue(target.value);
  const onCrossClick = () => setSearchValue('');
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchValue);
  };

  return (
    <SearchBarWrap onSubmit={onSubmit}>
      <BiSearch className="search-icon" />
      <input type="text" value={searchValue} onChange={onChange} />
      {isActiveCross && <ImCross className="close-icon" onClick={onCrossClick} />}
    </SearchBarWrap>
  );
}

const SearchBarWrap = styled.form`
  position: relative;
  background: #fff;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  border-radius: 24px;
  z-index: 3;
  height: 44px;
  width: 65%;
  display: flex;
  align-items: center;

  :hover {
    background-color: #fff;
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223, 225, 229, 0);
  }

  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    outline: none;
    width: calc(100% - 100px);
    height: 30px;
    font-size: 15px;
    box-sizing: border-box;
    ::placeholder {
      color: #ccc;
    }
  }

  .search-icon {
    color: #9aa0a6;
    height: 20px;
    width: 20px;
    margin: 0 10px 0 15px;
  }

  .close-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    cursor: pointer;
    color: #70757a;
  }
`;
