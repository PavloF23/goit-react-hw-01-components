import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { gerRendomHexColor } from './RendomColor';

export function Statistics({ title, stats }) {
    return (
      <section className={css.stats}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.statList}>    
      {stats.map(stat => (
        <li className={css.statItem} style={{backgroundColor: gerRendomHexColor()}} key={stat.id}>
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>       
      ))}      
    </ul>
  </section>
);
  }

  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };