import React, { ReactNode } from 'react';

interface IState {
};

interface IProps {
    parentData: ReactNode;
    handleChange: (e: string) => void;
}

export default class ChildClass extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
    }

    handle = () => {
        console.log(this.props.handleChange('Calling parent function'));
    }

    public render() {
        console.log(this.props);
        return (
            <div>
                <button onClick={this.handle}>Child Button</button>
            </div>
        )
    }
}