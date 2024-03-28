import React, { useEffect, useState } from 'react';
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from '@mui/material';
const About = () => {

    const [posts, setPosts] = useState([]);

    const defaultMaterialTheme = createTheme();
    useEffect(() => {
        fetch('https://api.publicapis.org/entries')
            .then((response) => response.json())
            .then((response) => {
                console.log("Data", response);
                setPosts(response.entries);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return (
        <>
            <div>About</div>
            <div style={{ width: '50%', height: '0%' }}></div>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <ThemeProvider theme={defaultMaterialTheme}>
                {/* To prevent Cannot read properties of undefined (reading 'direction') use ThemeProvider */}
                <MaterialTable
                    columns={[
                        { title: "API", field: "API" },
                        { title: "Auth", field: "Auth" },
                        { title: "Category", field: "Category" },
                        { title: "Cors", field: "Cors" },
                        { title: "Description", field: "Description" },
                        { title: "HTTPS", field: "HTTPS" },
                        { title: "Link", field: "Link" },
                    ]}
                    options={{
                        paging: true,
                        pageSize: 20,
                        search: false,
                        showTitle: false,
                        maxBodyHeight: "500px",
                        minBodyHeight: "100px",
                    }}
                    data={posts}
                    title="Entries" />
            </ThemeProvider >
        </>

    );
};

export default About;