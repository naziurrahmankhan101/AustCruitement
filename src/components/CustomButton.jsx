
const CustomButton = ({ title, containerStyles, iconRight, type, onClick }) => {
    return (
        <button
            className={`inline-flex itmes-center text-base ${containerStyles}`}
            type={type || 'button'}
            onClick={onClick}
        >
            {title}
            {iconRight && <div className="ml-2">{iconRight} </div> }

        </button>
    );
}

export default CustomButton;
