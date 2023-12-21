import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const shapes = { square: "rounded-none", round: "rounded" } as const;
const variants = {
  outline: {
    white_A700_7f: "border-b-2 border-solid border-white-A700_7f text-pink-50",
    gray_300: "border border-gray-300 border-solid text-blue_gray-900_03",
    gray_200_04: "border-b border-gray-200_04 border-solid text-gray-900_02",
    gray_600_01: "border border-gray-600_01 border-solid text-red-A700_01",
  },
  fill: {
    white_A700: "bg-white-A700 text-gray-600_05",
    teal_50: "bg-teal-50 text-teal-800",
    gray_100_02: "bg-gray-100_02 text-blue_gray-400_01",
    orange_600: "bg-orange-600 text-white-A700",
    blue_gray_100_03: "bg-blue_gray-100_03",
    gray_200_07: "bg-gray-200_07 text-blue_gray-300",
    gray_200: "bg-gray-200 text-black-900",
  },
} as const;
const sizes = {
  lg: "pb-2.5 pt-[21px] px-2.5",
  xs: "p-[5px]",
  xl: "pb-2.5 pt-[11px] px-2.5",
  md: "p-2",
  "2xl": "pb-[17px] pt-3 px-3",
  "3xl": "p-3.5",
} as const;

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    wrapClassName: string;
    className: string;
    name: string;
    placeholder: string;
    type: string;
    errors: string[];
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "fill",
      color = "gray_200",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${(shape && shapes[shape]) || ""} 
              ${(variant && variants[variant]?.[color]) || ""} 
              ${(size && sizes[size]) || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

export { Input };
