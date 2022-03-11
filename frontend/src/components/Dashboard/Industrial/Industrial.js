import { React, useState } from 'react';
import './Industrial.css';
import { TextField, IconButton } from "@material-ui/core";
import { DeleteOutline, HomeSharp, SeacheOutlined, SearchOutlined } from "@material-ui/icons";
import { userRows } from "../dashboard/dummyData";
import { Link } from "react-router-dom";
import { DataGrid, GridToolbarExport, GridToolbarContainer} from "@material-ui/data-grid";

function Industrial(props) {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "INDEX NO", width: 300 },
  
    { field: "email", headerName: "INDUSTRIAL PARTNER IMAGE", width: 300,
    renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="CourseListImg" src={params.row.avatar} alt="" />
          </div>
        );
      },
},
  
    {
      field: "action",
      headerName: "ACTION",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            
            <DeleteOutline
              className="CourseListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  function MyExportButton(){
    return(
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }


    return (
        <div className="CoursesTable">
                    <button className="Courseaddbutton">ADD INDUSTRIALS</button>
          
              
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        components={{Toolbar:MyExportButton,}}
      />
    </div>
    );
}

export default Industrial;