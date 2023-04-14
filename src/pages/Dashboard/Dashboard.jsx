import React from 'react';
import Statistics from '../../components/Statistics/Statistics';
import { cardsData, groupNumber } from '../../data';
import css from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={css.container}>

      {/* Left Side */}

      <div className={css.dashboard}>
        <div className={`${css.dashboardHead} theme-container`}>
          <div className={css.head}>
            <span>Dashboard</span>

            <div className={css.durationButton}>
              <select >
                <option value="1week">1 Week</option>
                <option value="1month">1 Month</option>
                <option value="1year">1 Year</option>
              </select>
            </div>

          </div>
          <div className={css.cards}>
            {
              cardsData.map((card, index) => (
                <div className={css.card}>
                  <div className={css.cardHead}>
                    <span>{card.title}</span>
                    <span>+{card.change}</span>

                  </div>

                  <div className={css.cardAmount}>
                    <span>$</span>
                    <span>{groupNumber(card.amount)}</span>
                  </div>

                </div>
              ))
            }
          </div>
        </div>

        <Statistics />

      </div>

      {/* Right Side */}

      <div className={css.orders}>
        orders
      </div>

    </div>
  )
}

export default Dashboard