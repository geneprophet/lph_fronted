import React, { useState, FC } from 'react';
import { Table, Tag, Space, Popconfirm, Button } from 'antd';
import { connect, Dispatch, Loading, UserState } from 'umi';
import UserModal from '@/pages/users/components/UserModal';
import { SingleUserType } from './data';

interface UserPageProps {
  users: UserState;
  dispatch: Dispatch;
  userListLoading: boolean;
}

const UsersListPage: FC<UserPageProps> = ({
  users,
  dispatch,
  userListLoading,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [record, setRecord] = useState<SingleUserType | undefined>(undefined);

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const editHandler = (record: SingleUserType) => {
    setIsModalVisible(true);
    setRecord(record);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values: any) => {
    let id = 0;
    if (record) {
      id = record.id;
    }
    if (id) {
      console.log('edit');
      dispatch({
        type: 'users/edit',
        payload: { id, values },
      });
    } else {
      console.log('add');
      console.log(values);
      dispatch({
        type: 'users/add',
        payload: { values },
      });
    }

    setIsModalVisible(false);
  };

  const confirm = (id: number) => {
    dispatch({
      type: 'users/delete',
      payload: { id },
    });
  };
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'CreateTime',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: SingleUserType) => (
        <span>
          <a
            onClick={() => {
              editHandler(record);
            }}
          >
            Edit
          </a>{' '}
          &nbsp;&nbsp;
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={() => {
              confirm(record.id);
            }}
            okText="Yes"
            cancelText="No"
          >
            <a>Delete</a>
          </Popconfirm>
          ,
        </span>
      ),
    },
    // {
    //   title: 'Tags',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: (tags) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
  ];

  const addHandler = () => {
    setIsModalVisible(true);
    setRecord(undefined);
  };
  return (
    <div>
      <Button type="primary" onClick={addHandler}>
        Add
      </Button>
      <Table
        columns={columns}
        dataSource={users.data}
        rowKey="id"
        loading={userListLoading}
      />
      <UserModal
        visible={isModalVisible}
        onOk={handleOk}
        record={record}
        onFinish={onFinish}
        onCancel={handleCancel}
      ></UserModal>
    </div>
  );
};

const mapStateToProps = ({
  users,
  loading,
}: {
  users: UserState;
  loading: Loading;
}) => {
  console.log(users);
  console.log(loading);
  return {
    users,
    userListLoading: loading.models.users,
  };
};

export default connect(mapStateToProps)(UsersListPage);
