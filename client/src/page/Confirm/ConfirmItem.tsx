import styled from 'styled-components';
import { request } from '@util/api';
import { DELETE_IMAGE_TYPE } from '@constant/type';

type ConfirmItemProps = {
  image_key: string;
  image_url: string;
  tag: string[];
};

export default function ConfirmItem({ image_key, image_url, tag }: ConfirmItemProps) {
  const onClickDelete = async () => {
    await request({
      url: '/admin/delete-image',
      method: 'delete',
      params: { key: image_key, type: DELETE_IMAGE_TYPE.CONFIRM },
    });
  };

  return (
    <li>
      <ConfirmItemWrap>
        <img src={image_url} alt="jjal-confirm-image" />
        <TagWrap>
          {tag.map((data) => (
            <li key={data}>#{data}</li>
          ))}
        </TagWrap>
        <ButtonWrap>
          <button className="accept" type="button">
            등록
          </button>
          <button onClick={onClickDelete} className="reject" type="button">
            삭제
          </button>
        </ButtonWrap>
      </ConfirmItemWrap>
    </li>
  );
}

const ConfirmItemWrap = styled.div`
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1), 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  align-items: center;

  img {
    width: 50%;
    border-radius: 10px;
  }

  @media (max-width: 700px) {
    justify-content: center;
    flex-direction: column;

    img {
      width: 80%;
    }
  }
`;

const TagWrap = styled.ul`
  width: 30%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 10px;
  font-size: 0.9rem;

  li {
    margin: 0 6px 5px 0;
    color: #00376b;
  }

  @media (max-width: 700px) {
    width: 80%;
    margin: 10px 0;
  }
`;

const ButtonWrap = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;

  button {
    border: none;
    outline: none;
    cursor: pointer;
    padding: 6px 0;
    border-radius: 6px;
    color: #fff;
    min-width: 100px;
    max-width: 150px;
    box-sizing: border-box;
  }

  .accept {
    margin-bottom: 8px;
    background-color: #3182f6;
    :hover {
      background-color: #1c64da;
    }
  }
  .reject {
    border: 1px solid #bdc3c7;
    color: #3182f6;
    background-color: #fff;
    :hover {
      color: #636e72;
      background-color: #f1f2f6;
    }
  }

  @media (max-width: 700px) {
    width: 80%;
    justify-content: center;
    flex-direction: row;

    .accept {
      margin-bottom: 0;
      margin-right: 8px;
    }
  }
`;
