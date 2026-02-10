import React from "react";
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | null;
  onBlur?: () => void;
  setValue?: any;
  validate?: () => boolean;
}

const Input = ({
  label,
  error,
  onBlur,
  type,
  name,
  value,
  onChange,
  className,
  setValue,
  validate,
  ...props
}: InputProps) => {
  return (
    <div className={`${styles.wrapper} ${className || ""}`}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
