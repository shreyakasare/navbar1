import React, { useState } from "react";

import countriesData from "./data/countries";
import styles from "./AppModule.css";
import Table from "./Table";

const AppTable = () => {
    debugger
    const [countries] = useState([...countriesData]);
    return (
        <main className={styles.container}>
            <div className={styles.wrapper}>
                <Table data={countries} rowsPerPage={4} />
            </div>
        </main>
    );
};

export default AppTable;