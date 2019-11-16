import styled, { css } from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';
import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${props =>
    props.hasUnRead &&
    css`
      &::after {
        position: absolute;
        right: 0;
        left: 0;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ff892e;
        content: '';
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  right: calc(100% + 30px);
  margin-top: 20px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  padding: 15px 0px;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 260px;
  padding: 0px 20px;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 16px;
  }

  time {
    font-size: 12px;
    opacity: 0.6;
  }

  button {
    font-size: 12;
    border: 0;
    background: none;
    color: ${lighten(0.2, '#7159c1')};
    padding: 0 5px;
    margin: 0 5px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  ${props =>
    props.unRead &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #ff892e;
        border-radius: 50%;
      }
    `}
`;
