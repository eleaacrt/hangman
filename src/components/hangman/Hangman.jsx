import { Svg } from "../svg/Svg";

export const Hangman = ({mistakes}) => {

    return (
        <>
            <svg width="154" height="245" viewBox="0 0 154 245" fill="none" xmlns="http://www.w3.org/2000/svg" mistakes={mistakes}>
                <Svg className="AllSvgs" mistakes={mistakes}> </Svg>
            </svg>
        </>
    )
};
