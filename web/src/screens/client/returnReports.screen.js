import React, { useState, useEffect } from 'react';
import returnColumns from 'common/columns/Return.column';
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { useTableSearch } from 'hooks/useTableSearch';
import { Link } from '@reach/router';
import { useAPI } from 'common/hooks/api';
import TableWithTabHOC from '../../hocs/TableWithTab.hoc';

const { Search } = Input;

const ReturnReportsScreen = ({ currentPage }) => {
  const [searchVal, setSearchVal] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [reqData, setReqData] = useState(null);
  const [deliveryId, setDeliveryId] = useState(null);

  const { data: returns, loading } = useAPI('/client-return/', {});

  const { filteredData, reload } = useTableSearch({
    searchVal,
    reqData,
  });

  useEffect(() => {
    if (returns) {
      const reqD = returns.map((ret) => ({
        ...ret,
      }));
      setReqData(reqD);
    }
  }, [returns]);

  const columns = [
    {
      title: 'Sr. No.',
      key: 'srno',
      render: (text, record, index) => (currentPage - 1) * 10 + index + 1,
    },
    ...returnColumns,
    {
      title: 'Docket',
      key: 'docket',
      render: (text, record) => {
        console.log(record);
        return (
          <Button type='primary'>
            <Link
              to='../return-docket/'
              state={{ id: record.id }}
              key={record.id}
              style={{ textDecoration: 'none' }}>
              View Docket
            </Link>
          </Button>
        );
      },
    },
  ];

  const tabs = [
    {
      name: 'All Return Dockets',
      key: 'allReturnDockets',
      data: filteredData,
      columns,
      loading,
    },
  ];

  const cancelEditing = () => {
    setEditingId(null);
    setDeliveryId(null);
  };

  const handleDone = () => {
    cancelEditing();
    reload();
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ width: '15vw', display: 'flex', alignItems: 'flex-end' }}>
          <Search onChange={(e) => setSearchVal(e.target.value)} placeholder='Search' enterButton />
        </div>
      </div>
      <br />
      <TableWithTabHOC
        rowKey={(record) => record.id}
        refresh={reload}
        tabs={tabs}
        size='middle'
        title='Return Reports'
        newPage='./return/'
        separate={!deliveryId}
        modalWidth={60}
        cancelEditing={cancelEditing}
        hideRightButton
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return { currentPage: state.page.currentPage };
};

export default connect(mapStateToProps)(ReturnReportsScreen);
