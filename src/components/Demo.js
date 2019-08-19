 import React, { Fragment } from 'react';
 import {Button} from 'antd'


class Demoexport extends React.Component{
    
    render(){
        
    // const a =(`${<Fragment><span>asiudgasghdashjk<br/>sjhdgajhgdjashgdjhg</span></Fragment>}`)
        const {example} = this.props;
        return (
            <div>
            <Button title={(<span>asiudgasghdashjk<br/>sjhdgajhgdjashgdjhg</span>)}>链接</Button>
                {example.current}
                {this.props.data}
            </div>
        )
    }
   
}

export default Demoexport
// export default connect(({ example }) => ({
//     // data: example.current,
//     example,
//   }))(Demoexport);
  
