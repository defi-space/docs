import React from "react";
import styles from "./doc-styles.module.css";

export const DocTable = ({ headers, data, rows, className, ...props }) => {
  // Use 'rows' prop if provided, otherwise use 'data' prop
  const tableData = rows || data || [];

  // Combine default styles with any additional className
  const tableClassName = className
    ? `${styles.table} ${className}`
    : styles.table;

  // Calculate even column widths based on number of headers
  const columnWidth = headers.length > 0 ? 100 / headers.length : 100;

  return (
    <table
      className={tableClassName}
      style={{ width: "100%", tableLayout: "fixed" }}
      {...props}
    >
      <colgroup>
        {headers.map((_, index) => (
          <col key={index} style={{ width: `${columnWidth}%` }} />
        ))}
      </colgroup>
      <thead className={styles.tableHeader}>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className={styles.tableHeaderCell}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex} className={styles.tableRow}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className={styles.tableCell}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
