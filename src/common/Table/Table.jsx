import { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import { useSelector } from 'react-redux'
import './Table.css'


const Table = () => {
    const employeesList = useSelector(state => state.employeesList.employees)
    const data = useMemo(() => [...employeesList], [employeesList])

    const columns = useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'firstName'
            },
            {
                Header: 'Last Name',
                accessor: 'lastName'
            },
            {
                Header: 'Start Date',
                accessor: 'startDateWorkString'
            },
            {
                Header: 'Department',
                accessor: 'department.value'
            },
            {
                Header: 'Date of Birth',
                accessor: 'dateOfBirthString'
            },
            {
                Header: 'Street',
                accessor: 'street'
            },
            {
                Header: 'City',
                accessor: 'city'
            },
            {
                Header: 'State',
                accessor: 'americaState.value'
            },
            {
                Header: 'Zip Code',
                accessor: 'zipCode'
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        setGlobalFilter,
        page,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        setPageSize,
        state: { globalFilter, pageIndex, pageSize },
    } = useTable({
        columns, data, initialState: {
            pageIndex: 0,
            pageSize: 5,
        }
    }, useGlobalFilter, useSortBy, usePagination);

    return (
        <div>
            <span className="globalFilter">
                <div className="globalFilterSelect"  >
                    <div className="globalFilterSelectText">
                        Show
                    </div>
                    <select className="globalFilterSelectSelect"
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                        }}
                    >
                        {[5, 10, 25, 50, 100].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                    <div className="globalFilterSelectText">
                        entries
                    </div>
                </div>
                <label>
                    <div className="globalFilterText">Search:</div>
                    <input
                        className="globalFilterInput"
                        type="text"
                        value={globalFilter || ""}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                    />
                </label>
            </span>
            <table {...getTableProps()}
                className="tableTable">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} className="trTable">
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className="thTable">
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? '🔽'
                                                : '🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()} className="tbodyTable">
                    {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            className="tdTable">
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="tablePagination">
                <button
                    className=" btnPaginationPrevious"
                    onClick={previousPage}
                    disabled={!canPreviousPage} //pages before 1 are disabled
                >
                    Previous
                </button>
                <span className="tablePaginationPage">
                    Page
                    <strong className="mx-3">
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                    <label className="tablePaginationLabel">
                        &nbsp; | &nbsp;  Go To Page &nbsp;&nbsp;
                        <input
                            type="number"
                            className="tablePaginationNumber"
                            defaultValue={pageIndex + 1}
                            onChange={(e) => {
                                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
                                gotoPage(pageNumber);
                            }}
                        />
                    </label>
                </span>
                <button
                    className="btnPaginationNext"
                    onClick={nextPage}
                    disabled={!canNextPage} //pages after 50 are disabled
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Table