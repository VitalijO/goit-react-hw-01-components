import "./Friends.css"
import PropTypes from 'prop-types';

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  const classNames = ["status", isOnline];
  if (isOnline ===true) classNames.push("online")
    return (  
    <>     
  <span className={classNames.join(" ")}>{isOnline}</span>       
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
    </>    
    )
}
 
Friend.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
}

