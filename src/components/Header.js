import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAddTask }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          onClick={onAdd}
          color={showAddTask ? "red" : "green"}
          text={showAddTask ? "Close" : "Add"}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//inline style
// style={{color: 'red', backgroundColor: 'black'}}

//other style way
// const headingStyle = {
//  color: 'red',
//  backgroundColor: 'black'
// }
// style={headingStyle}

export default Header;
