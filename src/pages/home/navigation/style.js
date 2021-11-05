import styled from "styled-components";

export const NavStyle = styled.div`
  width: 100vw;
  height: 35px;
  background-color: #C20C0C;
  .content{
    width: 1100px;
    margin: 0 auto;
    padding-left: 233px;
    
    a{
      display: inline-block;
      height: 20px;
      color: #fff;
      line-height: 20px;
      margin: 7px 17px 0;
      padding: 0 13px;
    }
    .active{
      background-color: #9B0909;
      border-radius: 20px;
    }
  }
  
`