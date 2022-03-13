import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { getAllCompany, getAllPost } from '../../store/action/categoryAction';
import Company from '../company/Company';
import ListPost from '../listPost/ListPost';
function DanhbaNhaNongHome(props) {
    const dispatch = useDispatch();
    const companies = useSelector((state) => state.categoryReducer.company);

    useEffect(() => {
        const getCategory = () => {
            dispatch(getAllCompany());
        };
        getCategory();
        window.scrollTo(0, 0)

    }, [dispatch]);
    return (
        <div className="grid wide">
            <Heading className="danhbanhanong__heading">
                <h1 style={{ fontSize: '24px', color: '#777' }}>Danh bạ nhà nông</h1>
            </Heading>
            <div className="row">
                <div className="col l-3">
                    <ListPost />
                </div>
                <div className="col l-9">
                    <div className="row">
                        {companies &&
                            companies.map((company, index) => (
                                <CompanyItem className="col l-4" key={index}>
                                    <Link to={`/danh-ba-nha-nong/${company._id}`}>
                                        <Company company={company} key={index} />
                                    </Link>
                                </CompanyItem>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DanhbaNhaNongHome;
const Heading = styled.div`
  padding: 40px 0;
  text-align: center;
  corlor: #777;
`;
const CompanyItem = styled.div`
  margin-top: 20px;
  cursor: pointer;
`;