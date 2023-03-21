import './Button.css'
export const Button = ({children, OnClick}) => {
    return (
        <button
        className="start-button"
        onClick = {OnClick}> 
            {children}
        </button>
    )
}