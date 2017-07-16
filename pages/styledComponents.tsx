import * as React from 'react';
import Links from '../components/Links';
import styled from 'styled-components';

const StyledH2 = styled.h2`
    color: red;
`;

export default () => (
    <div>
        <StyledH2>styledComponents.tsx</StyledH2>
        <Links />
    </div>
);

// type definition 내장
// Next 에서 이슈가 있음. 서버와 클라이언트 체크섬이 상이한 문제
// https://www.styled-components.com/docs/advanced#server-side-rendering