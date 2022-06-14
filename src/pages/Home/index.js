import React, { useState } from "react";

import styles from './Home.module.scss';
import Button from "../../components/Button";
import Header from "../../components/Header";
import EggBox from "../../components/EggBox";
import ExploreModal from "../../components/ExploreModal";

const eggList = [
    { id: 1, img: 'egg.png' },
    { id: 2, img: 'egg.png' },
    { id: 3, img: 'egg.png' },
    { id: 4, img: 'egg.png' },
    { id: 5, img: 'egg.png' },
    { id: 6, img: 'egg.png' },
    { id: 7, img: 'egg.png' }
]

const lockingPeriod = [
    {
        title: "Land1",
        fireCount: 50,
        lp: '2 Weeks'
    },
    {
        title: "Land2",
        fireCount: 80,
        lp: '4 Weeks'
    },
    {
        title: "Land1",
        fireCount: 120,
        lp: '2 Months'
    }
]

const Home = () => {

    const [walletConnected, setWalletConnected] = useState(false)
    const [fireCount, setFireCount] = useState(0)
    const [openExplore, setOpenExplore] = useState(false)

    const connectWallet = () => {
        console.log('click connect wallet')
        setWalletConnected(true)
    }

    const selectEgg = (id) => {
        console.log(id + ' egg clicked')
        setOpenExplore(true)
    }

    const selectAll = () => {
        console.log('click select all')
        setOpenExplore(true)
    }

    const clickSend = () => {
        console.log('click send')
    }

    const clickCancel = () => {
        setOpenExplore(false)
    }

    return (
        <div className={styles.div}>
            <div className={styles.home}>
                <Header />
                <div className={styles.status}>
                    <div>
                        <div className={styles.font_52}>
                            InfinityExploration
                        </div>
                        {!walletConnected && <Button value="CONNECT" style={{ width: 169, height: 38 }} onClick={connectWallet} dark />}
                        {walletConnected && <div className={styles.btn_group}>
                            <Button value="GRN5T...45GT" style={{ width: 169, height: 38 }} dark />
                            <Button value="SELECT ALL" style={{ width: 169, height: 38, marginLeft: 28 }} onClick={selectAll} dark />
                        </div>
                        }
                    </div>
                    <div className={styles.total}>
                        <div className={styles.font_24}>
                            TOTAL <br /> $FIRE
                        </div>
                        <div className={styles.font_52}>
                            {fireCount}
                        </div>
                    </div>
                </div>
                <div className={styles.eggs}>
                    {eggList.map((egg, index) => (
                        <EggBox obj={egg} key={index} onClick={selectEgg} />
                    ))}
                </div>
            </div>
            {openExplore && <ExploreModal
                lockingPeriod={lockingPeriod}
                clickSend={clickSend}
                clickCancel={clickCancel}
            />}
        </div>
    )
}

export default Home