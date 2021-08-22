import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import Job from '../components/Job'
import Jobs from '../components/Jobs'
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard" />

            <Router>
                <Container>
                    <Switch>
                        <Route exact path="/dashboard">
                            <Jobs />
                        </Route>
                        <Route path="/job">
                            <Job />
                        </Route>
                    </Switch>    
                </Container>
            </Router>
        </Authenticated>
    );
}
