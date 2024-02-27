interface inputProps{
    name: string;
    type: string;
    placeholder?: string;
    value: string;
}

const Input = ({name, type, placeholder, value}: inputProps) =>{
    return (
        <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        />
    )
};