import React from 'react';
import Box from '@material-ui/core/Box';

function ContentBanner(props) {
    return (
        <Box p={16} {...props}>
            {props.children}
            <span style={{ clear: 'both', display: 'block' }}></span>
        </Box>
    );
}

export default ContentBanner;
