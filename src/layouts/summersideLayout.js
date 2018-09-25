import React from 'react';
import Helmet from 'react-helmet';
import 'semantic-ui-css/semantic.min.css';
import './index.scss';
import './summersideLayout.scss';

const summersideLayout = (props) => {

    const { children } = props;

    return (
        <div
            style={{
                display: 'flex',
                minHeight: '100vh',
                flexDirection: 'column',
            }}
        >
            <Helmet
                title="wFern"
                meta={[
                    {name: 'description', content: 'Personal website about programing, music, photo etc'},
                    {name: 'keywords', content: 'wfern, programing, music, photo'},
                ]}
            />
            <div
                style={{
                    flex: 1,
                    color: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {children()}
            </div>
        </div>
    )
}

export default summersideLayout;