import React, { useState } from "react";
import useTable from "./useTable";
import "./moduleTable.css";
import TableFooter from "./indexTableFooter";

const Table = ({ data, rowsPerPage }) => {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    return (
        <>
            <table className="table">
                <thead className="tableRowHeader">
                    <tr>
                        <th className="tableHeader">Country</th>
                        <th className="tableHeader">Capital</th>
                        <th className="tableHeader">Language</th>
                    </tr>
                </thead>
                <tbody>
                    {slice.map((el) => (
                        <tr className="tableRowItems" key={el.id}>
                            <td className="tableCell">{el.name}</td>
                            <td className="tableCell">{el.capital}</td>
                            <td className="tableCell">{el.language}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
        </>
    );
};

export default Table;