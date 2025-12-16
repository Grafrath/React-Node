function Button(props) {
    const buttonText = props.text || "클릭";
    return (
        <button>
            {buttonText}
        </button>
    );
}

export default Button;