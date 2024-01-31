import { data as skillData } from "../data/skills";
import Icon from "./Icon";

function Table() {
  return (
    <>
      <h2 className="flex justify-center font-bold p-1">Table name!!!</h2>
      <table>
        <TableRow data={skillData} />
      </table>
    </>
  );
}

function TableRow({ data }) {
  return (
    <tr className="flex flex-wrap gap-3 justify-center">
      {data.map((item, i) => (
        <TableCell key={i}>
          <Icon icon={item.icon} size={45} />
        </TableCell>
      ))}
    </tr>
  );
}

function TableCell({ children }) {
  return <td>{children}</td>;
}

export default Table;
