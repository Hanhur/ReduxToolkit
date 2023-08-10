
const InputFild = ({text, hendelInput, hendelSubmit}) => {
    return (
        <label>
            <input type={text} onClick={(event) => hendelInput(event.target.value)} />
            <button onClick={hendelSubmit}>App Todo</button>
        </label>
    );
}

export default InputFild;
