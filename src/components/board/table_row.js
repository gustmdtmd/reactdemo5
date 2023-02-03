const TableRow = (props) => {
  const { board, currentPage } = props;

  return (
    <tr>
      <td>{board.num}</td>
      <td>{board.subject}</td>
      <td>{board.writer}</td>
      <td>{board.readcount}</td>
    </tr>
  );
};

export default TableRow;
