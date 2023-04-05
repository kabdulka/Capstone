
import "../Checkbox/Checkbox.scss";

const Checkbox = ({label, value, onChange, placeholder, name}) => {

    return (

        <>

            <label className="checkbox__label">
                <input
                    type="checkbox"
                    onChange={onChange}
                
                    checked={value}  
                    placeholder={placeholder}
                    name={name}

                />

                {label}
                
            </label>

        </>

    );
}

export default Checkbox;