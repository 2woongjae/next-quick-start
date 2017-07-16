import * as React from 'react';
import Links from '../components/Links';

export default () => (
    <div>
        <h2>styleJsx.tsx</h2>
        <style jsx>{`
            h2 {
                color: red;
            }
            li {
                color: blue;
            }
        `}</style>
        <Links />
    </div>
);

// style jsx 어트리뷰트가 제대로 정의되지 않음.