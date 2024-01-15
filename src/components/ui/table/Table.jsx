import Button from "../Button";

export default function Table({ tableHeads, tableDatas, additionalClasses, setEmployee }) {
  const deleteTableRow = (idOfRowToDelete) => {
    setEmployee(prev => prev.filter((item) => item.id !== idOfRowToDelete))
  }

  return (
    <table
      className={`table-auto w-full px-4 mx-auto ${additionalClasses || ""}`}
    >
      <thead>
        <tr className="text-left bg-gray-50">
          {tableHeads.map((value, index) => (
            <th className="text-gray-900 p-4 text-lg font-bold" key={index}>
              {value}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableDatas.map((value) => (
          <tr className="border-b font-semibold text-gray-600 animate__animated animate__fadeIn" key={value.id}>
            <td className="ps-4 py-4 font-bold text-black">#{value.id}</td>
            <td className="ps-4 py-4">{value.name}</td>
            <td className="ps-4 py-4">{value.salary}<span className="text-gray-900 text-xs"> ₺</span></td>
            <td className="ps-4 py-4">
              <Button
                additionalClasses="rounded-md"
                onClickEvent={() => deleteTableRow(value.id)}
              >
                Delete Employee
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
