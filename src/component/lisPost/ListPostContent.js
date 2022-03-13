import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from "styled-components";

function ListPostContent(props) {
    return (
        <ListpostWrap className='listpostcontent'>
            <Outlet />
        </ListpostWrap>
    );
}

export default ListPostContent;
const ListpostWrap = styled.div`
  margin: 10px 0;
`;