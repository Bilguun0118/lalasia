import { RiSearch2Line } from 'react-icons/ri';
import { Button } from './Button';
import "../App.css"
import "../style/Input.css"

export const Input = () => {
    return(
        <div className='input flex flex-row space-between align-items'>
            <RiSearch2Line/>
            <input type="text"/>
            <Button name="Search"/>
        </div>
    )
}