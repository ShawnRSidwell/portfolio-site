const tableData = [
  "Row 1, Cell 1",
  "Row 1, Cell 2",
  "Row 1, Cell 3",
  "Row 1, Cell 1",
  "Row 1, Cell 2",
  "Row 1, Cell 3",
  "Row 1, Cell 1",
  "Row 1, Cell 2",
  "Row 1, Cell 3",
];
function Table() {
  return (
    <>
      <h2 className="flex justify-center font-bold p-1">Table name!!!</h2>
      <table>
        <TableRow data={tableData} />
      </table>
    </>
  );
}

function TableRow({ data }) {
  return (
    <tr className="flex flex-wrap gap-3 justify-center">
      {data.map((content, i) => (
        <TableCell key={i}>{content}</TableCell>
      ))}
    </tr>
  );
}

function TableCell({ children }) {
  return <td>{children}</td>;
}

export default Table;
