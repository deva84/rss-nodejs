import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { Input } from "../../common";
import { useState } from "react";

describe("Input component", () => {
  const placeholderTextMock = "Enter a value";

  test("should render input with provided labelText prop value", () => {
    const handleChange = jest.fn();
    render(
      <Input
        labelText="Test Input"
        placeholderText={placeholderTextMock}
        onChange={handleChange}
      />
    );

    const inputElement = screen.getByLabelText("Test Input");
    expect(inputElement).toBeInTheDocument();
  });

  test("should render input with provided placeholderText prop value", () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input
        labelText="Test Input"
        placeholderText={placeholderTextMock}
        onChange={handleChange}
      />
    );

    expect(getByPlaceholderText(placeholderTextMock)).toBeInTheDocument();
  });

  test("should call provided callback for onChange event", () => {
    const handleChange = jest.fn();

    const ParentComponent = () => {
      const [value, setValue] = useState("");
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        handleChange(e);
      };

      return (
        <Input
          labelText="Test Input"
          onChange={handleInputChange}
          value={value}
          placeholderText="Enter text"
        />
      );
    };

    render(<ParentComponent />);

    const inputElement = screen.getByLabelText(
      "Test Input"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "Hello" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(inputElement.value).toBe("Hello");
  });
});
