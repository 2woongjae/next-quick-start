import * as React from 'react';
import Links from '../components/Links';
import * as request from 'superagent';

interface HelloProps {
    pathname: string;
    isServer: boolean;
    persons: number;
}

interface InitialContext {
    pathname: string;
    query: object;
    asPath: any;
    req?: any;
    res?: any;
    jsonPageRes?: any;
    err: any;
}

export default class Hello extends React.Component<HelloProps, {}> {
    public static async getInitialProps(context: InitialContext): Promise<HelloProps> {
        console.log(context.pathname);
        console.log(context.query);
        console.log(context.asPath);

        const res = await request.get('https://api.github.com/users');

        console.log(res.body.length);

        if (context.req) {
            return {
                pathname: context.pathname,
                isServer: true,
                persons: res.body.length
            };
        } else {
            return {
                pathname: context.pathname,
                isServer: false,
                persons: res.body.length
            }
        }
    }
    render() {
        return (
            <div>
                <h2>hello.tsx</h2>
                <Links />
                <p>{this.props.pathname}</p>
                <p>{(this.props.isServer) ? '이 페이지는 서버로부터 랜더링 되었습니다.' : '이 페이지는 클라이언트에서 랜더링 되었습니다.'}</p>
                <p>{this.props.persons}</p>
            </div>
        );
    }
}