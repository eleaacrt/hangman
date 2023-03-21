import './Word.css';



export const Word = ({children, correctLetters}) => {
    
    const maskedWord = children.split('').map(letter => correctLetters.includes(letter) ? letter : "_").join(" ");

    return (
        <>
            
            <div className="div-word">
                {maskedWord}
            </div>
            
        </>
    );};