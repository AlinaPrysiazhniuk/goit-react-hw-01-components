import propTypes from 'prop-types'; 
import css from "./Statistics.module.css";

export const Statistics =({title, stats}) => {
    return (
    <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>
  
    <ul className={css.stat_list}>
    {stats.map(({id, label, percentage})=> (
            <li className={css.item} key={id}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}</span>
            </li> 
    ))}   
    </ul>
  </section>
  )
}

Statistics.propTypes = {
title: propTypes.string.isRequired,
stats: propTypes.arrayOf(
propTypes.shape({
    id: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired,
}).isRequired
).isRequired,
}


