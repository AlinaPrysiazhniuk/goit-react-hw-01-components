import propTypes from 'prop-types'; 
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transaction_history}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            { items.map(({id, type, amount, currency}) => {
               return (
                <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
               )
            } ) 
            }
          
        </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape(
            {
            id: propTypes.string,
            type: propTypes.string,
            amount: propTypes.string,
            currency: propTypes.string,
        }
    ) )
    }