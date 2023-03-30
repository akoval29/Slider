import {useState, useEffect, useRef} from 'react';

const CheckBox = ({nextSlide}) => {
    const interval = useRef(null);                       // Autoplay
    const timeout = useRef(null);                        // Autoplay
    const [isChecked, setIsChecked] = useState(false);   // checkBox
    
    const onCheckBox = () => {
        if (isChecked) {
            interval.current = setInterval(
                () => nextSlide(), 3000);      
            timeout.current = setTimeout(() => {
                clearInterval(interval.current);
            }, 3000);
        } else {
        return undefined
        }

        return () => {
            clearInterval(interval.current);
            clearTimeout(timeout.current);
        }
    }

    useEffect(() => {
        onCheckBox();
    });

    // Фіксим баг - скажений автоплей
    function checkBoxHandle () {
        setIsChecked(!isChecked);
        clearInterval(interval.current);
        console.log(`Autoplay: ${!isChecked}`);
    }

    return (
        <div className="checkBoxBlock">
            <input 
                type="checkbox"
                id='switch' 
                checked={isChecked} 
                onChange={() => checkBoxHandle()}
                className={`checkbox ${isChecked ? "checkBoxAct" : "checkBoxDisact"}`}
                aria-hidden="true"
            >
            </input>
            <label htmlFor='switch'>Autoplay</label>
        </div>
    )
}

export default CheckBox