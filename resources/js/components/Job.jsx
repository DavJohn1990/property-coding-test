import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from 'axios';

function Job({ user }) {
    const [property, setProperties] = useState([]);
    const [summary, setSummary] = useState('');
    const [description, setDescription] = useState('');
    const [property_id, setPropertyId] = useState('1');

    useEffect (() => {
        axios.get(`api/properties/`)
            .then(res => setProperties(res.data))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/jobs', { summary, description, property_id, user })
    }



    return (
        <>
            <h1 className="text-center">Add a job</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="summary">Summary</label>
                    <input type="text" className="form-control" id="summary" aria-describedby="emailHelp" value={summary} onChange={(e) => setSummary(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="property">Property</label>
                    <select className="form-control" id="property" onChange={(e) => setPropertyId(e.target.value)}>
                    {property.map((prop) => (
                        <option value={prop.id}>{prop.name}</option>
                    ))}
                    </select>
                </div>            
                <div className="d-flex justify-content-center">          
                    <Button type="submit">
                        Add job
                    </Button>
                </div> 
            </form>
            <div className="d-flex justify-content-center pt-3"> 
                <Link to="/" className="text-decoration-none mb-3">
                    <Button>
                        View Jobs
                    </Button>
                </Link>
            </div> 
        </>
    );
}

export default Job