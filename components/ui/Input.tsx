interface inputProps{
    name: string;
    type: string;
    placeholder?: string;
    value?: string | number | undefined;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const Input: React.FC<inputProps> = ({ name, type, placeholder, value, onChange }) => {
    return (
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={"shadow appearance-none border rounded w-5/6 ml-3 mb-2 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
      />
    );
  };

export default Input;