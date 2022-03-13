import React from 'react';
import { baseURL } from '../../Context/ContTant';
import styled from "styled-components";

function Company(props) {
    const { company } = props

    return (
        <CompanyWrap className="company__item" >
            <div className="company__img">
                <img src={company && `${baseURL}/${company.img}`} alt="" />
            </div>
            <div className="company__desc">
                <h3>{company && company.Name}</h3>
                <p
                    dangerouslySetInnerHTML={{ __html: company && company.description }}
                ></p>
            </div>
        </CompanyWrap>
    );
}

export default Company;
const CompanyWrap = styled.div`

    width : 100%;
    height: 100%;
    box-shadow:0 0 10px #dbdbdb;
    transition: all 0.2s linear;
    &:hover{
        box-shadow:0 0 10px #444
    }

    .company__img {
        height    : 160px;
        width     : 100%;
        text-align: center;
        border-bottom    : 1px solid #ccc;
        overflow  : hidden;

        img {
            height: 100%;
            width : 100%;
        }


    }

    .company__desc {
        padding: 0 10px;

        h3 {
            font-size: 24px;
            height   : 80px;
            padding  : 10px 0;
        }

        p {
            color             : #777;
            width             : 100%;
            text-align        : justify;
            display           : -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            font-size         : 14px !important;
            line-height       : 1.4;
            height            : 60px;
            overflow          : hidden;
            font-weight       : 300;
            font-family       : Arial, Helvetica, sans-serif !important;
        }
    
}
`