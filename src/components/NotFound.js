// Icons
import { FaFrown } from 'react-icons/fa';

//CSS
import './NotFound.css';

const NotFound = ({ message, type }) => {
    let typeNotFound;

    if(type === "page") {
        typeNotFound = "page-notfound";

    }else if(type === "search") {
        typeNotFound = "search-notfound";
    }

    return (
        <div className={typeNotFound}>
            <FaFrown />
            <p>{message}</p>
        </div>
    );
}

export default NotFound;