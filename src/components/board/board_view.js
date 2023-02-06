import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { baseUrl } from '../../commonApi/todoApi';

const BoardView = () => {
  const [board, setBoard] = useState({});
  const { currentPage, num } = useParams();
  console.log(currentPage, num);

  useEffect(() => {
    getData();
  }, []);

  // 백앤드
  const getData = async () => {
    await axios
      .get(`${baseUrl}/board/view/${num}`)
      .then((response) => {
        //console.log(response.data);
        setBoard(response.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  // 다운로드
  const handleDownLoad = async () => {
    await axios
      .get(`${baseUrl}/board/contentdownload/${board.upload}`, {
        responseType: 'blob',
      })
      .then((response) => {
        console.log(response.headers);
        const fileName = board.upload.substring(board.upload.indexOf('_') + 1);
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        link.style.cssText = 'display:none';
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((err) => console.error(err.message));
  };

  const handleDelete = () => {};

  return (
    <div>
      <table className='table table-striped' style={{ marginTop: 20 }}>
        <tbody>
          <tr>
            <th width='20%'>글쓴이</th>
            <td>{board.writer}</td>
            <th width='20%'>조회수</th>
            <td>{board.readcount}</td>
          </tr>

          <tr>
            <th>제목</th>
            <td colSpan='3'>{board.subject}</td>
          </tr>

          <tr>
            <th>메일</th>
            <td colSpan='3'>{board.email}</td>
          </tr>

          <tr>
            <th>내용</th>
            <td colSpan='3'>{board.content}</td>
          </tr>

          <tr>
            <th>파일</th>
            <td colSpan='3'>
              <button onClick={handleDownLoad}>
                {board.upload
                  ? board.upload.substring(board.upload.indexOf('_') + 1)
                  : null}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <Link className='btn btn-primary' to={`/board/list/${currentPage}`}>
        리스트
      </Link>
      <Link
        className='btn btn-primary'
        to={`/board/write/${currentPage}/${num}/${board.ref}/${board.re_step}/${board.re_level}`}
      >
        답변
      </Link>

      <Link
        className='btn btn-primary'
        to={`/board/update/${currentPage}/${num}`}
      >
        수정
      </Link>

      <button className='btn btn-primary' onClick={handleDelete}>
        삭제
      </button>
    </div>
  );
};

export default BoardView;
