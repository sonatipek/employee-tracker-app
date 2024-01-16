import { useEffect, useState } from "react";
import EmployeeForm from "./components/Employee/EmployeeForm";
import EmployeeList from "./components/Employee/EmployeeList";
import Text from "./components/ui/Text";
import Title from "./components/ui/Title";
import Card from "./components/ui/Card";

export default function App() {
  const [employee, setEmployee] = useState(
    localStorage.getItem("employees")
      ? JSON.parse(localStorage.getItem("employees"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employee));
  }, [employee]);

  return (
    <div className="mb-12" id="app_container">
      <Title additionalClasses="text-center mb-2 mt-12">Employee Tracker</Title>

      <Text textType="subtext" additionalClasses="text-center mb-6">
        You can use to track of your employees!
      </Text>

      <EmployeeForm
        setEmployee={setEmployee}
        employeeState={[employee, setEmployee]}
      />

      {employee.length > 0 ? (
        <EmployeeList employeeState={[employee, setEmployee]} />
      ) : (
        <Card additionalClasses="mt-12 animate__animated animate__fadeIn ">
          <Title additionalClasses="text-center md:text-4xl">
            You have not added an employee yet!
          </Title>
          <Text textType="subtext" additionalClasses="text-center mt-2">
            Add your first employee using the form above!
          </Text>
        </Card>
      )}
    </div>
  );
}
