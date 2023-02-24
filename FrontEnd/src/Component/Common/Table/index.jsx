import { Component } from "react";
import { DataGrid } from '@mui/x-data-grid';

class GDSEDataTable extends Component {
    render() {
        const {
            rows,
            columns,
            pageSize,
            rowsPerPageOptions,
            checkboxSelection
        } = this.props;

        return (
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={pageSize}
                rowsPerPageOptions={[rowsPerPageOptions]}
                checkboxSelection={checkboxSelection}
            />
        )
    }
}
export default GDSEDataTable;