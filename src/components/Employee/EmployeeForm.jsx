import { useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import InputGroup from "../ui/form/InputGroup";
import Modal from "../ui/Modal";

const minimumWage = 5667;
const minNameChar = 5;

export default function EmployeeForm({ employeeState }) {
  const [employee, setEmployee] = employeeState;
  const [modalError, setModalError] = useState(null);
  const [employeeName, setEmployeeName] = useState("");
  const [employeeSalary, setEmployeeSalary] = useState("");

  const clearAllInputs = () => {
    setEmployeeName("");
    setEmployeeSalary("");
  };

  const areInputsEmpty = () => {
    if (
      employeeName.trim().length === 0 ||
      employeeSalary.trim().length === 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  const isSalaryLowByMinimumWage = () => {
    if (+employeeSalary < minimumWage) {
      return true;
    } else {
      return false;
    }
  };

  const isEmployeeNameInvalid = () => {
    if (employeeName.length < minNameChar) {
      return true;
    } else {
      return false;
    }
  };

  const checkAllInputValidationsRules = () => {
    if (areInputsEmpty()) {
      return "EMPTY_INPUTS";
    }

    if (isSalaryLowByMinimumWage()) {
      return "LOW_SALARY";
    }

    if (isEmployeeNameInvalid()) {
      return "INVALID_NAME";
    }
  };

  const addEmployee = () => {
    setEmployee((prev) => [
      ...prev,
      { id: prev.length + 1, name: employeeName, salary: employeeSalary },
    ]);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    switch (checkAllInputValidationsRules()) {
      case "EMPTY_INPUTS":
        return setModalError({
          title: "Empty Inputs",
          content:
            "Inputs must not be empty. Please enter employee name and salary correctly.",
        });

      case "LOW_SALARY":
        return setModalError({
          title: "Low Salary By Minimum Wage",
          content: `Employee salary cannot be lower than the minimum wage. You cannot enter for less than ${minimumWage}₺, which is the lowest trainee salary. `,
        });

      case "INVALID_NAME":
        return setModalError({
          title: "Invalid Employee Name",
          content: `Employee name entered is invalid. The employee name must be at least ${minNameChar} characters.`,
        });

      default:
        setModalError(null);
        break;
    }

    addEmployee();
    clearAllInputs();
  };

  const clearHandler =  () => {
    setEmployee([]);
  };

  const modalHandler = () => {
    setModalError(null);
  };

  return (
    <Card>
      {modalError && <Modal error={modalError} buttonEvent={modalHandler} />}

      <form>
        <InputGroup
          inputPlaceholder="Jhon Doe"
          labelContent="Employee Name"
          uniqueId="name"
          inputType="text"
          inputValue={employeeName}
          inputOnChangeHandler={(e) => setEmployeeName(e.target.value)}
        />
        <InputGroup
          inputPlaceholder="5667"
          labelContent="Employee Salary"
          uniqueId="salary"
          inputType="number"
          inputValue={employeeSalary}
          inputOnChangeHandler={(e) => setEmployeeSalary(e.target.value)}
        />

        <Button
          buttonType="submit"
          additionalClasses="w-full py-3"
          onClickEvent={submitHandler}
        >
          Add Employee
        </Button>

        {employee.length >= 2 && (
          <Button
            additionalClasses="animate__animated animate__fadeIn w-full py-3 mt-4 bg-red-100 border border-red-500 text-red-700 hover:bg-red-200"
            onClickEvent={clearHandler}
          >
            Clear List
          </Button>
        )}
      </form>
    </Card>
  );
}
