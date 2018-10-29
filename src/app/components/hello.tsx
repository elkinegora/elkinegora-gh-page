import * as React from 'react';

export class Hello extends React.Component<IProps, {}> {
    render() {
        return (
            <div>
                <h1>This is my starter bundle, that I gonna use to create my personal github page with {this.props.framework} application using {this.props.compiler} with {this.props.bundler}</h1>
            </div>
        )
    }
}