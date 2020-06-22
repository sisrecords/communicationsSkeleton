import React from 'react';
import MaterialTable from 'material-table';
import TablePagination from '@material-ui/core/TablePagination';
import { forwardRef } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';  

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


export default function MaterialTableDemo() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Surname', field: 'surname' },
            { title: 'Surname', field: 'surname' },
            { title: 'Surname', field: 'surname' },
            { title: 'Surname', field: 'surname' },
            { title: 'Surname', field: 'surname' },
            { title: 'Surname', field: 'surname' },
            { title: 'Surname', field: 'surname' },
            { title: 'Surname', field: 'surname' },

            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
                title: 'Birth Place',
                field: 'birthCity',
                lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
        ],
        data: [
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },

            {
                name: 'Zerya Betül',
                surname: 'Baran',
                birthYear: 2017,
                birthCity: 34,
            },
        ],
    });
    return (
        <AutoSizer>
        {({ height, width }) => {
            console.log(`Height: ${height} | Width: ${width}`);
            const pageSize = Math.floor((height - 192) / 48);
            console.log(`Page Size: ${pageSize}`);

            return (
            <div style={{ height: `${height}px`, width: `${width}px`, overflowY: 'auto' }}>
                <MaterialTable
                columns={state.columns}
                data={state.data}
                options={{
                    pageSize: pageSize,
                    pageSizeOptions: [],
                    toolbar: true,
                    paging: true
                }}
                icons={tableIcons}
                ></MaterialTable>
            </div>
            );
        }}
        </AutoSizer>


        // <MaterialTable
        // // rowStyle={{height:'20px !important'}}
        //     icons={tableIcons}
        //     title=""
        //     columns={state.columns}
        //     data={state.data}
        //     options={{
        //         pageSizeOptions: 8,
        //         pageSize: 6,
        //         //rowStyle:(null,null,40)
        //     }}
        //     components={{
        //         Pagination: props => (
        //             <TablePagination
        //                 {...props}
        //                 //rowsPerPageOptions={0}
        //                 //rowsPerPage={8}
        //             //count={10}
        //             />)
        //     }}
        //     />
            );
        }
        
                //   editable={{
                //     onRowAdd: (newData) =>
                //       new Promise((resolve) => {
                //         setTimeout(() => {
                //           resolve();
                //           setState((prevState) => {
                //             const data = [...prevState.data];
                //             data.push(newData);
                //             return { ...prevState, data };
                //           });
                //         }, 600);
                //       }),
                //     onRowUpdate: (newData, oldData) =>
                //       new Promise((resolve) => {
                //         setTimeout(() => {
                //           resolve();
                //           if (oldData) {
                //             setState((prevState) => {
                //               const data = [...prevState.data];
                //               data[data.indexOf(oldData)] = newData;
                //               return { ...prevState, data };
                //             });
                //           }
                //         }, 600);
                //       }),
                //     onRowDelete: (oldData) =>
                //       new Promise((resolve) => {
                //         setTimeout(() => {
                //           resolve();
                //           setState((prevState) => {
                //             const data = [...prevState.data];
                //             data.splice(data.indexOf(oldData), 1);
                //             return { ...prevState, data };
                //           });
                //         }, 600);
                //       }),
                //   }}