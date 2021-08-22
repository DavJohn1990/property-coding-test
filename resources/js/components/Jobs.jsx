import React, {useState, useEffect} from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

function Jobs() {
    const [jobs, setJobs] = useState([]);

    useEffect (() => {
        axios.get(`api/jobs/`)
            .then(res => setJobs(res.data))
    }, [])

    return (
        <>
            <h1 className="text-center">Jobs</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Summary</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Property</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job) => (
                        <tr key={job.id}>
                            <td>{job.summary}</td>
                            <td>{job.description}</td>
                            <td>{job.status}</td>
                            <td>{job.property.name}</td>
                        </tr>
                    ))}
                </tbody>
                </Table>
                <div className="d-flex justify-content-center">          
                    <Link to="/job" className="text-decoration-none">
                        <Button>
                        Add a job
                        </Button>
                    </Link>
                </div> 
        </> 
    );
}

export default Jobs