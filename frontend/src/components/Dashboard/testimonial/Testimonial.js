import { React, useState} from 'react';
import './testimonial.css';
import { TextField, IconButton } from "@material-ui/core";
import { DeleteOutline, HomeSharp, SearchOutlined } from "@material-ui/icons";
import { testimonial } from "../testimonialpage/dummyData";
import { Link } from "react-router-dom";
import { DataGrid, GridToolbarExport, GridToolbarContainer} from "@material-ui/data-grid";

function Testimonial(props) {

  const [data, setData] = useState(testimonial);

  const handleDelete = (id) => {
  setData(data.filter((item) => item.id !== id));
};

    const columns = [
        { field: "id", headerName: "INDEX NO", width: 250 },
        {
          field: "name",
          headerName: "NAME",
          width: 500,
          renderCell: (params) => {
            return (
              <div className="CourseListUser">
                {params.row.name}
              </div>
            );
          },
        },
        {
          field: "coursename",
          headerName: "COURSE TITLE",
          width: 500,
          renderCell: (params) => {
            return (
              <div className="CourseListUser">
                {params.row.coursename}
              </div>
            );
          },
        },
        { field: "organ", headerName: "ORGANISATION", width: 200,
        renderCell: (params) => {
            return (
              <div className="userListUser">
              {params.row.organ}
              </div>
            );
          },
    },
        
        {
          field: "testi",
          headerName: "TESTIMONIALS",
          width: 250,
          renderCell: (params) => {
            return (
              <div className="CourseListUser">
                {params.row.testi}
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
                <Link to={"/dashboard/courselist/course" + params.row.id}>
                  <button className="CourseListEdit">View</button>
                </Link>
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
  <button className="Courseaddbutton">ADD TESTIMONIALS</button>
        
              
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

export default Testimonial;