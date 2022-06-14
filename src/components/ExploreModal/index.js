import React from "react";

import styles from './Modal.module.scss';

const ExploreModal = (props) => {

    const { lockingPeriod, clickSend, clickCancel } = props

    return (
        <div className={styles.div}>
            <div className={styles.modal}>
                <div className={styles.body}>
                    <div className={styles.font_52}>
                        Explore the InfinityVerse
                    </div>
                    <div className={styles.font_20}>
                        Choose the Lockingperiod
                    </div>
                    <div className={styles.lands}>
                        {lockingPeriod.map((locking, index) => (
                            <div className={styles.land} key={index}>
                                <div className={styles.container}>
                                    {locking.title}
                                </div>
                                <div className={styles.font_14}>
                                    {locking.fireCount} $FIRE per Week
                                </div>
                                <div className={styles.font_8}>
                                    LP: {locking.lp}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.btn} onClick={clickSend}>
                        SEND ON EXPLORATION
                    </div>
                    <div className={styles.btn} onClick={clickCancel}>
                        CANCEL
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreModal