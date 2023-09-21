import PropTypes from 'prop-types';
import '../css/illustration.css';
const Illustration = ({image}) =>{
    return(
        <figure className='illustration'>
            <img src={image} alt="" />
        </figure>
    );
}

Illustration.propTypes = {
    image: PropTypes.string
}
export default Illustration;