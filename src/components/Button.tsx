interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, className, text }) => {
    return (
        <button type="button" onClick={onClick} disabled={disabled} className={`${className} btn btn-primary`}>
            <p className="text-white lg:text-base md:text-md text-sm font-bold uppercase">
                {text}
            </p>
        </button>
    );
};

export default Button;