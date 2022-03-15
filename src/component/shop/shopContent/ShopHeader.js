import React from 'react';
import styled from "styled-components";

function ShopHeader(props) {
    return (
        <ShopHeaderWrap className="shop__header">
            <div className="shop__heading">
                <h3>Trang chủ</h3>
            </div>
            <div className="shop__option">
                <select
                    defaultValue={"DEFAULT"}
                    className="shop__select"
                    name=""
                    id=""
                >
                    <option disabled value="DEFAULT">
                        Lựa chọn
                    </option>
                    <option value="/cua-hang/moi-nhat"></option>
                    <option value="">Theo giá từ thấp đến cao</option>
                    <option value="">Theo giá từ cao đến thấp</option>
                </select>
            </div>
        </ShopHeaderWrap>
    );
}

export default ShopHeader;
const ShopHeaderWrap = styled.div`
        display        : flex;
        align-items    : center;
        justify-content: space-between;
        padding        : 20px 0;

        .shop__heading {
            font-size: 24px;
            display  : block;

            h3 {
                font-weight: 300;
                color      : #444;

            }

        }

        .shop__option {
            .shop__select {
                display      : block;
                padding      : 8px 0;
                border-radius: 10px;
                font-size    : 14px;
            }
        }
`