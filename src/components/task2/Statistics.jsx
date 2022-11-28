import "./Statistic.css"
import PropTypes from 'prop-types';

export const Statistics= ({el: {label, percentage}}) => {
    return (  
  
    <>
      <span className="label"> {label} </span>
      <span className="percentage">{percentage} %</span>
    </>
         
    )
}
 
Statistics.propTypes = {
    el: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired,
 
}