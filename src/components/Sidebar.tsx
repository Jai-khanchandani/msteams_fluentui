import React from 'react'
import styled from 'styled-components';
import logo from './logo.png';

function Sidebar() {
    return (
        <SidebarContainer>
            <h2>Hello</h2>
            {/* return <img src={logo} alt="Logo" />; */}
            
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    
    background-color: var(--slack-color);
    flex: 0.9;
    max-width: 600px;
    
    
    > h2 {
        margin-top: 320px;
        color: white;
        margin-left: 250px;
    }

    /* > img {
        background-image: url(./public/logo.png);
    } */

    /* margin-right: 450px; */
    

`;
