import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import Bootsrap from 'bootstrap/dist/css/bootstrap.css';
import Job from '../components/Job'
import Jobs from '../components/Jobs'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

function App() {
    return (
        <Router>
            <Container>
                <Switch>
                    <Route exact path="/">
                        <Jobs />
                    </Route>
                    <Route path="/job">
                        <Job />
                    </Route>
                </Switch>    
            </Container>
        </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
