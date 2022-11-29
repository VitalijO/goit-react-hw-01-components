 import PropTypes from 'prop-types';

export const Statistics= ({title, stats: {label, percentage}}) => {
    return (  
    <>
    {title && (
    <h2 className="label">Upload stats</h2>
      )}
      <span className="label"> {label} </span>
      <span className="percentage">{percentage} %</span>
    </>
         
    )
}
 
Statistics.propTypes = {
    title :PropTypes.string,
    stats: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired,
 
}