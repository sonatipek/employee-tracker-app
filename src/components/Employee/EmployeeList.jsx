import Card from "../ui/Card";
import Title from "../ui/Title";
import Table from "../ui/table/Table";

export default function EmployeeList({ employeeState }) {
  const [employee, setEmployee] = employeeState;

  return (
    <Card additionalClasses="mt-12 animate__animated animate__fadeIn overflow-x-scroll">
      <Title additionalClasses="text-3xl text-center">Employee List</Title>

      <Table
        tableHeads={["No","Employee Name", "Salary", "Operations"]}
        tableDatas={employee}
        setEmployee={setEmployee}
        additionalClasses={"mt-5"}
      />
    </Card>
  );
}
