const ContadorView = ({ contador, buttonAddRef, buttonSubtractRef }) => {
    return (
        <div className="contadorbutton">
            <button ref={buttonSubtractRef}>-</button>
            <p>{contador}</p>
            <button ref={buttonAddRef}>+</button>
        </div>
    );
};

export default ContadorView;
