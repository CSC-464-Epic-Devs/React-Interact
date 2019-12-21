import React from 'react';
import Box from '@material-ui/core/Box';
import HighLightLink from 'components/highLightLink';

function PrevNextNav(props) {
    return (
    <Box {...props}>
        <HighLightLink href={props.next} style={{float: "right", width:"33.33%", textAlign:"center"}}>
            Next
        </HighLightLink>

        <HighLightLink href={props.home}  style={{float: "right", width:"33.33%", textAlign:"center"}}>
            Home
        </HighLightLink>

        <HighLightLink href={props.prev}  style={{float: "left", width:"33.33%", textAlign:"center"}}>
            Previous
        </HighLightLink>
    </Box>
    );
}

export default PrevNextNav;
