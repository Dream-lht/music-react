import styled from "styled-components";

//底部样式

export const Footer = styled.div`
  width: 100vw;
  height: 172px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background-color: #f2f2f2;
  
  .content{
    display: flex;
    justify-content: space-between;
    width: 980px;
    margin: 0 auto;
  }
`;

export const FooterLeft = styled.div`
  padding: 15px 0 0;
  .link_item{
    color: #999;
    border-right:1px solid #ccc ;
    padding: 0 10px;
  }
  .link_item:last-of-type{
    border-right:transparent ;
  }
  .link_item:first-child{
    padding-left: 0;
  }
  .link_item:hover{
    text-decoration: underline;
  }
  
  .company_info{
    height: 24px;
    line-height: 24px;
    color: #666;
    font-size: 12px;
    margin: 0;
  }
  .sep{
    margin-right: 10px;
  }
  .company_info a{
    color: #666;
  }
  .company_info a:hover{
    text-decoration: underline;
  }
`;



export const FooterRight = styled.div`
  ul{
    display: flex;
    margin:33px 0 0;
  }
  li{
    width: 60px;
    margin-left: 30px;
  }
  li:first-child{
    margin-left: 0;
  }
  li a{
    display: inline-block;
    width: 50px;
    height: 45px;
  }
  li:nth-child(1) a{
    background-position: -60px -456px;
  }
  li:nth-child(2) a{
    background-position: -60px -101px;
  }
  li:nth-child(3) a{
    background-position: 0 0;
  }
  li:nth-child(4) a{
    background-position: -60px -50px;
  }
  li:nth-child(5) a{
    background-position: 0 -100px;
  }
  li span{
    display: inline-block;
    width: 72px;
    height: 12px;
  }
  li:nth-child(1) span{
    margin: 5px -5px 0;
    background-position: 0 -108px;
  }
  li:nth-child(2) span{
    background-position: -1px -91px;
  }
  li:nth-child(3) span{
    background-position: 0 0;
  }
  li:nth-child(4) span{
    background-position: 0 -54px;
  }
  li:nth-child(5) span{
    background-position: -1px -72px;
  }
`;