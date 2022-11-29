import css from "./Statistic.module.css"
import PropTypes from 'prop-types';
import { Statistics } from './Statistics'; 
import { random } from "./random.js";

 

export const StatisticsList = ({data}) => {
    return (
      <section className="statistics">
       

    <ul className={css.stat}>
      {data.map(stats => (
        <li className={css.item} key={stats.id}
        style={{backgroundColor:random()}}>

              <Statistics stats={stats} />
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