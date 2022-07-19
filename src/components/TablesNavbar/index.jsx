import { useState } from "react";

import styles from "./styles.module.scss";

export default function TablesNavbar(){


    const colors = {
        "blue" : "#00F0FF",
        "green" : "#33FF00",
        "yellow" : "#FAFF00",
        "red" : "#FF0000",
    }

    const [red, setRed] = useState()



    return(
        <div className={styles.container}>
            <div className={styles.containerTable}>

                <table className={styles.table}>
                    <thead><th colSpan={3}><h1>Mesas Status</h1></th></thead>
                    
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>6</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>11</td>
                                <td>12</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>14</td>
                                <td>15</td>
                            </tr>
                        </tbody>
                    
                </table>

            </div>
        </div>
    )
}