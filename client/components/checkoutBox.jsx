import React from 'react';
import styled from 'styled-components';
import InputBox from './inputBox';

const StyledDiv = styled.div`
  height: 276px;
  width: 90%;
  margin: auto;
  margin-top: 48px;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 120px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;

const DivFlex1 = styled.div`
  flex: 1;
  border: 1px black solid;
`;

const CheckoutBox = ({ inputClick, renderCalendar, renderGuest, availability }) => (
  <StyledDiv className="checkoutBox">
    <DivFlex1>
      test
    </DivFlex1>
    <InputBox
      availability={availability}
      renderGuest={renderGuest}
      renderCalendar={renderCalendar}
      inputClick={inputClick}
    />
    <DivFlex1>
      test
    </DivFlex1>
  </StyledDiv>
);

export default CheckoutBox;
