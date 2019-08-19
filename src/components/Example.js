import React from 'react';
import { connect } from 'dva';
import Demoexport from './Demo';
import {Table, Divider, Tag, Modal} from 'antd'

 class Example extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
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

   handleClick = (record) => {
     console.log('点击')
     console.log(this.props)
     this.setState({visible:true})
    const { dispatch } = this.props;
    // console.log('e', e.target)
    dispatch({
      type: 'example/getnamee',
      payload: {
        name: record.name,
        h: record.age,
      }

    })
  }
  render() {
    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];
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

    const ModalZI = (record) => {
      return (
        <span>
        <a onClick={(record) => this.handleClick(record)}>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    )
      }
    return (
      <div>
        <button onClick={this.handleClick}>点击</button>
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

