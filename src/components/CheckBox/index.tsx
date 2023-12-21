import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    gray_600_04: "bg-gray-600_04 text-blue_gray-400",
    pink_700: "bg-pink-700 text-black-900",
    gray_300: "bg-gray-300 text-blue_gray-900_03",
  },
};
const shapes = { square: "rounded-none", round: "rounded-[5px]" };
const sizes = { xs: "pb-[3px]" };

export type CheckboxProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    inputClassName: string;
    className: string;
    name: string;
    label: string;
    errors: string[];
    id: string;
    onChange: Function;
    color: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;

const CheckBox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      inputClassName = "",
      className = "",
      name = "",
      children,
      label = "",
      errors = [],
      id = "checkbox_id",
      onChange,
      color = "gray_300",
      shape = "round",
      variant = "fill",
      size = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${(shape && shapes[shape]) || ""} ${
              (size && sizes[size]) || ""
            } ${(variant && variants[variant]?.[color]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            {...restProps}
            id={id}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  },
);

export { CheckBox };
