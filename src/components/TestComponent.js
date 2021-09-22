import React from 'react'

class TestComponent extends React.Component {

    state = {
        count: 2,
    }

    render() {
        return (
            <div>
                <h1>{this.props.flag ? 'Test Component' : "Demo Component"}</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut consectetur deserunt, dicta dolorum
                    ea explicabo facere impedit in iste itaque libero placeat quaerat rem saepe, sed sunt ut voluptas?
                </p>
                {this.state.count === 2 ? ( <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, aliquam aspernatur atque
                    beatae commodi culpa dignissimos doloremque eos ex facere labore natus necessitatibus nesciunt omnis
                    optio voluptas voluptate. Dolore.
                </p>) : null}

            </div>
        );
    }
}

export default TestComponent
