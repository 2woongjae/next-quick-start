import * as React from 'react';
import Link from 'next/link';

export default () => (
    <div>
        <ul>
            <li><Link href="/"><a>/</a></Link></li>
            <li><Link prefetch href="/hello"><a>/hello</a></Link></li>
            <li><Link prefetch href="/hello?test=test"><a>/hello?test=test</a></Link></li>

            <li><Link prefetch href="/styledJsx"><a>/styledJsx</a></Link></li>
            <li><Link prefetch href="/styledComponents"><a>/styledComponents</a></Link></li>
            <li><Link prefetch href="/typeStyle"><a>/typeStyle</a></Link></li>
        </ul>
    </div>
);