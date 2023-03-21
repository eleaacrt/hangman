import './AllCases.css';
import {useState} from 'react';



export const AllCases = ({onClick, letter}) => {

    const [className, setClassName] = useState('div-letter');
    

    return (

        <button 
            key={letter}
            className={className}
            onClick={() => {
                setClassName('div-letter clicked')
                onClick()
            }
            }
            disabled={className === 'div-letter clicked'}
            >{letter}</button>
           
    )
}