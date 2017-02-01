import React from 'react';
import { Link } from 'react-router';

function Books(props) {
    return (
        <section className="content books">
            <div className="mdl-tabs">
                <div className="mdl-tabs__tab-bar">
                    <Link to="/books/javascript" className="mdl-tabs__tab">JavaScript</Link>
                    <Link to="/books/react" className="mdl-tabs__tab">React</Link>
                    <Link to="/books/angular" className="mdl-tabs__tab">Angular</Link>
                </div>

                <div className="mdl-tabs__panel">
                    {props.children}
                </div>
            </div>
        </section>
    );
}

export default Books;
