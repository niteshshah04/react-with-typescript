import React from 'react';
import ChildClass from './childClass';

interface IState {
    data: string
};

interface IProps {
};

export default class ParentClass extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    state: IState = {
        data: 'First TypeScript Application'
    }

    handleChange = (e: string) => {
        alert(e);
        this.setState({ data: e });
    }

    public render() {
        console.log('THIS  :::: ', this);
        return (
            <div>
                <div>React {this.state.data}
                    <div><button onClick={() => this.handleChange('')}>Click Me</button></div>
                </div>
                <ChildClass parentData={this.state.data} handleChange={this.handleChange} />
            </div>
        )
    }
}