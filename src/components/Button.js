import "../style/Button.css"
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export const Button = (props) => {
    return (
        <button>
            {props.name}
            <HiOutlineArrowNarrowRight/>
        </button>
    )
}