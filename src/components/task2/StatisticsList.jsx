import "./Statistic.css"
import PropTypes from 'prop-types';
import { Statistics } from './Statistics'; 
import { random } from "./random.js";

 

export const StatisticsList = ({data}) => {
    return (
       <section className="statistics">
  <h2 className="label">Upload stats</h2>

    <ul className="stat-list">
      {data.map(el => (
        <li className="item-data" key={el.id}
        style={{backgroundColor:random()}}>

              <Statistics el={el} />
        </li>
      ))}
    </ul></section>
  );
};

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};