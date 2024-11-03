import React from 'react';
import styles from './Luxury.module.css';
import { __slides } from './__slides.js';

const Luxury = () => {
    return (
        <div className={styles.luxury}>
            <div className={styles.heading}>
                <h2>Luxury Selection</h2> 
                <div className={styles.text_bg}>
                    <p>
                        <span>Select from the top luxury vehicles to roll in style</span>
                    </p>
                </div>               
            </div>

            <div className={styles.container}>
                {__slides.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <img src={item.href} alt={item.alt} />
                        <div className={styles.content}>
                            <h3>Rolls Royce</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Luxury;
