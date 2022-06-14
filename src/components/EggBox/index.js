import React from "react";

import styles from './EggBox.module.scss';
import { getImg } from "../../utils/Helper";
import Button from "../../components/Button";


const EggBox = (props) => {

    const { obj: { img, id }, onClick } = props

    return (
        <div className={styles.div}>
            <div className={styles.egg}>
                <img src={getImg(img)} alt="egg" />
            </div>
            <Button value="SELECT" style={{ width: 130, height: 38 }} dark onClick={() => onClick(id)} />
        </div>
    )
}

export default EggBox