import Input from "./Input";
import Label from "./Label";

export default function InputGroup({
  uniqueId,
  labelContent,
  inputPlaceholder,
  inputType,
  inputValue,
  inputOnChangeHandler
}) {
  return (
    <div className="flex flex-col my-2">
      <Label htmlFor={uniqueId}>{labelContent}</Label>
      <Input
        htmlPlaceholder={inputPlaceholder}
        uniqueId={uniqueId}
        inputType={inputType}
        inputValue={inputValue}
        onChangeHandler={inputOnChangeHandler}
      />
    </div>
  );
}
