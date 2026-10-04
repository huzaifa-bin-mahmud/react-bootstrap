import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {

    const [stds, setStds]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/students").then(res => setStds(res.data))
    },[stds])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 ">
                    <h2 className="mb-3">All Students</h2>
                    <table className="table table-bordered table-striped table-hover">
                        <tr >
                            <th>SN</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Hometown</th>
                            <th>Action</th>
                        </tr>
                        {stds.map((std,i) => (
                            <tr key={std.id}>
                                <td>{i+1}</td>
                                <td>{std.name}</td>
                                <td>{std.gender}</td>
                                <td>{std.hometown}</td>
                                <td>
                                    <button className="btn btn-sm btn-primary">Edit</button>
                                    <button className="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;