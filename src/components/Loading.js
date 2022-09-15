// Loading image
import loading from '../img/loading.svg';

// CSS
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading-container">
            <img src={loading} alt="Loading" />
            <h3>Carregando...</h3>
        </div>
    );
}

export default Loading;