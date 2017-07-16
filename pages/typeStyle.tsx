import * as React from 'react';
import Links from '../components/Links';
import {style} from 'typestyle';

const h2Style = style({
    color: 'red'
});

export default () => (
    <div>
        <h2 className={h2Style}>typeStyle.tsx</h2>
        <Links />
    </div>
);
