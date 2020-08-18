import React from 'react';
import { useTable, useSortBy, useFilters } from 'react-table';
import { columns, data } from './dataSource';
import { CustomInput } from './CustomInput';

import './react-table.styles.scss';

window.Date.prototype.isValid = function() {
  // An invalid date object returns NaN for getTime() and NaN is the only
  // object not strictly equal to itself.
  // eslint-disable-next-line
  return this.getTime() === this.getTime();
};

const ColumnFilter = ({ column: { filterValue, setFilter, filter } }) => {
  return (
    <CustomInput
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${filter ? filter : ''}...`}
    />
  );
};

const ReactTable = () => {
  // functions to run when a column is filtered depending on the type
  const filterTypes = {
    year: (rows, id, filterValue) => {
      return rows.filter(row => {
        const rowValue = row.values[id];
        return rowValue !== undefined &&
          Number(filterValue) &&
          new Date(rowValue) &&
          new Date(rowValue).isValid()
          ? new Date(rowValue).getFullYear() === Number(filterValue)
          : true;
      });
    },
    text: (rows, id, filterValue) => {
      return rows.filter(row => {
        const rowValue = row.values[id];
        return rowValue !== undefined
          ? String(rowValue)
              .toLowerCase()
              .startsWith(String(filterValue).toLowerCase())
          : true;
      });
    }
  };
  const defaultColumn = {
    // Set up default Filter UI
    Filter: ColumnFilter
  };

  //Get the react table functions by using the hook useStable
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes
    },
    useFilters, // hook for filetering
    useSortBy // hook for sorting
  );
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, i) => {
              // three new addition to column: isSorted, isSortedDesc, getSortByToggleProps
              const {
                render,
                getHeaderProps,
                isSorted,
                isSortedDesc,
                getSortByToggleProps,
                // filter,
                canFilter
              } = column;
              const extraClass = isSorted ? (isSortedDesc ? '🔽' : '🔼') : '';
              //console.log(render);
              return (
                <th
                  key={`th-${i}`}
                  className={extraClass}
                  // getHeaderProps now receives a function
                >
                  <div {...getHeaderProps(getSortByToggleProps())}>
                    {render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </div>

                  {/* Render the columns filter UI */}
                  <div>{canFilter ? render('Filter') : null}</div>
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ReactTable;
