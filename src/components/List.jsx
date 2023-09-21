import PropTypes from "prop-types";
import '../css/list.css';
const List = ({ list, listImage }) => {
  return (
    <ul className="ul-list">
      {list.map((item, index) => (
        <li key={index}>
          <img src={listImage} alt="list-icon" />
          {item}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  list: PropTypes.array,
  listImage: PropTypes.string,
};
export default List;
