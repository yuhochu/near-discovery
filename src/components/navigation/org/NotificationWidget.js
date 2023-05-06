import React from "react";
import styled from "styled-components";
import { Widget } from "near-social-vm";

const StyledNotificationWidget = styled.div`
  margin: 0 15px;
  // border: 0.5px solid #e3e3e0;
  background-color: #2b2f31;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor:pointer;

  > div,
  a {
    width: 100%;
    height: 100%;
  }

  a {
    color: #fff !important;
    // background-color: #f3f3f2 !important;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      font-size: 18px !important;
    }
  }
`;

export function NotificationWidget({ notificationButtonSrc, onMouseEnter }) {
  return (
    <StyledNotificationWidget
      className="nav-notification-widget"
      onMouseOver={onMouseEnter}
    >
      <Widget src={notificationButtonSrc} />
    </StyledNotificationWidget>
  );
}
