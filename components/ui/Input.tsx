interface inputProps{
    name: string;
    type: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<inputProps> = ({ name, type, placeholder, value, onChange }) => {
    return (
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  };

export default Input;