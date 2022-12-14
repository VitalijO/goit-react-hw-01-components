import clsx from "clsx";
import css from "./Friends.module.css"
import PropTypes from 'prop-types';

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
   
   
    return (  
    <>     
<span className={clsx(css.status, css[isOnline])} >{isOnline}</span>   

  

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