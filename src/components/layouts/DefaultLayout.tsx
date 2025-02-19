import type { ReactNode } from 'react';
import styled from 'styled-components';

import { DesktopNavigationLeft } from '../navigation/desktop/DesktopNavigationLeft';
import { LoginBox } from '../navigation/desktop/LoginBox';

interface Props {
  children: ReactNode;
}

const Layout = styled.div`
  background: #1e202f;
  display: flex;
  .content {
    padding: 16px 36px;
    flex-grow: 1;
    position: relative;

    width: calc(100vw - 300px);
  }
  @media (max-width: 900px) {
    flex-direction:column;
    .content{
      width: 100%;
      min-height:100vh;
    }
  }
`;
export function DefaultLayout({ children }: Props) {
  return (
    <Layout>
      <DesktopNavigationLeft />
      <div className="content">
        <LoginBox />
        {children}
      </div>
    </Layout>
  );
}
