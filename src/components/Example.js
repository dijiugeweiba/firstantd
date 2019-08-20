import React from 'react';
import { connect } from 'dva';
import Demoexport from './Demo';
import {Table, Divider, Tag, Modal} from 'antd'


 class Example extends React.Component {
  state = { 
    visible: false ,
    data: []
  };
  componentDidMount() {
    const {dispatch,example:{data}} = this.props
    dispatch({
      type:'example/getdatae',
    })
    this.setState({
      data: data,
    })
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  

  handleOk = e => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  //  handleClick = data => {
  //    console.log('点击')
  //   //  console.log(this.props)
  //    console.log(data)
    
  // }
  handleModal = data => {
    console.log('modal')
    // console.log(data)
    this.setState({visible:true})
    const { dispatch } = this.props;
    dispatch({
      type: 'example/getnamee',
      payload: {
        name: data.name,
        h: data.age,
      }
    })


  }
  render() {
   const ModalZI = record => {
      return (
        <span>
        <a onClick={() => this.handleModal(record)}>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    )
    }
    const data = this.props.example.data
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <ModalZI {...record}/>
        ),
      },
    ];

    const {example} = this.props;

    const demoProps = {
      example:example,
      data:'zkjashkdfjhaskjdhak',
    }

    
    return (
      <div>
        {/* <button onClick={this.handleClick}>点击</button> */}
        {/* <Demoexport {...demoProps} /> */}
        {/* <div>{}</div> */}
        <Table columns={columns} dataSource={data} />
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        </Modal>
        </div>)
}
};

Example.propTypes = {
};
export default connect(({ example }) => ({
  // data: example.current,
  example,
}))(Example);

