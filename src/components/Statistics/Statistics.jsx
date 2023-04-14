import css from './Statistics.module.css';
import { BsArrowUpShort } from 'react-icons/bs'
import { groupNumber } from '../../data';
import StatisticsChart from '../StatisticsChart/StatisticsChart';

const Statistics = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <span className={css.title}>Overview Statistics</span>

            <div className={`${css.cards} grey-container`}>
                <div>
                    <div className={css.arrowIcon}>
                        <BsArrowUpShort size={30} />
                    </div>

                    <div className={css.card}>
                        <span>Top items this months</span>
                        <span>Office comps</span>

                    </div>

                </div>

                <div className={css.card}>
                    <span>Items</span>
                    <span>{groupNumber(345)}</span>
                </div>

                <div className={css.card}>
                    <span>Profit</span>
                    <span>{groupNumber(370000)}</span>
                </div>

                <div className={css.card}>
                    <span>Daily Average</span>
                    <span>{groupNumber(3000)}</span>
                </div>

            </div>


            <StatisticsChart />

        </div>
    )
}

export default Statistics