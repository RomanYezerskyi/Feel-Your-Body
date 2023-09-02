import React from 'react';
import styles from './CustomInput.module.css';
import PropTypes from 'prop-types';
import eye from '../../img/components/eye.png';
import eyeOff from '../../img/components/eyeOff.png';

const customStyles = {
    control: () => ({}),
    option: () => ({}),
};

const CustomInput = ({ onChange, className, placeholder, type, required,  customInputContainer, icon, value}) => {
    return (
        <div className={customInputContainer ?? styles.customInputContainer}>
            <input
                required={required}
                onChange={onChange}
                className={className}
                placeholder={placeholder}
                type={type}
                value={value}
            />
            { icon &&
                <span
                    className={styles.passwordIconBox}
                >
                     <img src={icon}/>
                </span>
            }
        </div>
    );
};

CustomInput.propTypes = {
    // options: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         value: PropTypes.string.isRequired,
    //         label: PropTypes.string.isRequired,
    //         isPurchased: PropTypes.bool,
    //     })
    // ).isRequired,
    // onChange: PropTypes.func.isRequired,
};

export default CustomInput;