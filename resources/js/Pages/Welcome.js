import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Bootsrap from 'bootstrap/dist/css/bootstrap.css';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <Container>
                
                <div className="d-flex justify-content-center pt-3">
                 
                    {props.auth.user ? (
                        <Link href="/" className="text-sm text-gray-700 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>   
                            <Link href={route('login')} className="text-sm text-gray-700 underline">
                                <Button>
                                    Log in  
                                </Button>
                            </Link>

                            <Link href={route('register')} className="ml-4 text-sm text-gray-700 underline">
                                <Button>
                                    Register
                                </Button>
                            </Link>
                        </>
                    )} 
                    
                </div>
            </Container>
        </>
    );
}
