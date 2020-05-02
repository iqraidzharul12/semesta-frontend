import React, { Component, Fragment } from 'react';
import { ListUser, SearchUser, Pagination } from '../components';
import { initialPage, defaultRequest } from '../config';
import { getPager } from '../helper/Helper';
import { getDataByFilter } from '../helper/FetchApi';

class UserSummary extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isToggled: false,
      sweetAlert: null,
      pager: { ...defaultRequest },
      filter: {
        id: '',
        role: '',
      },
      resData: {
        content: [],
      },
      list: [],
    };
  }

  componentDidMount(){
    this.getData(0, 5)
  }

  toggleFilter=()=>{
    this.setState({isToggled : !this.state.isToggled})
  }

  setStateByName = (name: string, value: any) => { this.setState({ [name]: value }) };

  getData(page: number, pageSize: number){
    const { filter } = this.state
    const resData = getDataByFilter(filter, page, pageSize);
    const list = resData.content;
    
    const { pager } = this.state;
    const pagenumber: any = pager.currentPage === 0 ? 1 : pager.currentPage;

    this.setState({resData, list}, () => this.setPage(pagenumber));
  }

  handlePageSizeChange = (pager: any) => this.setState({ pager });

  handlePageSizeGo = (e: any) => {
    try {
      e.preventDefault();
      const { pager } = this.state;

      const copyPager = { ...pager };

      const currentPage = initialPage.pagenumber;
      let pageSize = initialPage.pageSize;
      if (copyPager && copyPager.pageSize) pageSize = copyPager.pageSize;

      copyPager['pageSize'] = pageSize;
      copyPager['currentPage'] = currentPage + 1;

      this.setState({ pager: copyPager });
      this.getData(currentPage, pageSize);
    } catch (e) {
      console.log('error at handlePageSizeGo with error: ', e);
    }
  }

  handleChangePage = (page: number) => {
    try {
      const copyPager = this.state.pager;

      let pageSize = initialPage.pageSize;
      if (copyPager && copyPager.pageSize && copyPager.pageSize !== 0) pageSize = copyPager.pageSize;

      copyPager['currentPage'] = page;
      this.setState({ pager: copyPager });

      this.getData(page - 1, pageSize);
    } catch (e) {
      console.log('error at handleChangePage with error: ', e);
    }
  }

  setPage = (page: number) => {
    try {
      const { pager, resData } = this.state;
      let copyPager: any = { ...pager };
      const totalresults = resData.totalElements;

      const pagesize = pager ? pager.pageSize : 0;
      const totalPages = Math.ceil(totalresults / pagesize);

      if (page < 1 || page > totalPages) return;

      copyPager = getPager(totalresults, page, pagesize);

      this.setState({ pager: copyPager });
    } catch (e) {
      console.log('error at set Page with error: ', e);
    }
  }

  onSearch(){
    const pager = this.state.pager;
    pager.currentPage = 1;
    this.setState({pager});
    if(pager.pageSize > 0){
      this.getData(0, pager.pageSize);
    }else{
      this.getData(0, 10);
    }
  }

  onClear(){
    const filter = {
      id: '',
      role: '',
    }
    this.setState({filter})
  }
  
  handleOpenCreate = () => { this.props.history.push('/user/create'); }

  render() { 
    const { resData, filter, pager, sweetAlert } = this.state
    console.log(filter)
    return (
        <div className="animated fadeIn">
          {sweetAlert}
          <SearchUser
            handleOpenCreate ={()=>{this.handleOpenCreate()}}
            onSearch={() => this.onSearch()}
            onClear={() => this.onClear()}
            filter = {filter}
            setStateByName={(name: string, value: any) => this.setStateByName(name, value)}
          ></SearchUser>
        <Fragment>
          <ListUser
            history={this.props.history}
            userList={resData.content}
            setStateByName={(name: string, value: any) => this.setStateByName(name, value)}
          />
          <Pagination
            pager={pager}
            resData = {resData}
            onChangePage={this.handleChangePage}
            onChangePageSize={this.handlePageSizeChange}
            onChangePageSizeGo={this.handlePageSizeGo} 
            />
        </Fragment>
      </div>
    )
  }
}

export default UserSummary;