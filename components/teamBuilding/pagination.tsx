import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate'; 

type Props = {
  className?: string;
  myTeamSize: number;
  handleSearchMyteam: (page:number) => void;
};

//1ページに表示する件数
const onePage = 5;
//最終ページに表示する件数
const lastPage = 5;
//選択位置の前後で表示する件数
const aroundPage = 2;

const Base: React.FC<Props> = ({
  className,myTeamSize,handleSearchMyteam
}) => {

const handlePaginate = (selectedItem: { selected: number }) => {
  //表示しているページ番号
  const page = selectedItem.selected + 1;
  handleSearchMyteam(page);
};

//表示するページ数
const calculatePageCount = () => {
  if(0 > Math.ceil(myTeamSize / onePage)){
    return 1
  }else{
    return Math.ceil(myTeamSize / onePage)
  }
  
}

  return (
    <div className={`${className}__pageButtonList`}>
      <ReactPaginate
        pageCount={calculatePageCount()}
        marginPagesDisplayed={lastPage}
        pageRangeDisplayed={aroundPage}
        onPageChange={handlePaginate}
        containerClassName={`${className}__pageui`}
        pageClassName={`${className}__notSelectedButton`}
        activeClassName={`${className}__activeButton`}
        previousClassName={`${className}__displaynone`}
        nextClassName={`${className}__displaynone`}
        activeLinkClassName="active"
        disabledClassName="disabled-button"
      />
  </div>
  );
};

const Pagination = styled(Base)`
&__pageButtonList {
  color: #b2b2b2;
  font-size: 18px;
  margin: 6px 0 0 5px;
  height: 30px;
  width: 490px;
}
&__pageui{
  display: flex;
  list-style: none;
}
&__notSelectedButton {
  width: 60px;
  height: 30px;
  margin-right: 6px;
  text-align: center;
  :hover{
    width: 60px;
  height: 30px;
  border-radius: 0px 0px 6px 6px;
  background-color: #656565;
  color: #e6e8ed;
  margin-right: 6px;
  text-align: center;
  }
}
&__activeButton {
  width: 60px;
  height: 30px;
  border-radius: 0px 0px 6px 6px;
  background-color: #5987cd;
  color: #ffffff;
  margin-right: 6px;
  text-align: center;
}
&__displaynone{
  display: none;
}
`;

export default Pagination;
