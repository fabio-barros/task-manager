import PropTypes from "prop-types";
const Button = ({ text, color, onClick }) => {
    return (
        <div>
            <button
                className="btn"
                style={{ backgroundColor: color }}
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    );
};

Button.defaultProps = {
    color: "steelblue",
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default Button;
