import styled from 'styled-components'

export const HeaderStyle = styled.div`
  background-color:#242424;
  width: 100vw;
  height: 75px;
  
  .content{
    display: flex;
    height: 69px;
    justify-content: space-between;
  }
  .bottom_line{
    background-color: #C20C0C;
    height: 5px;
    width: 100%;
    margin-top: 1px;
  }
`

export const HeaderRight = styled.div`
  .logo{
    display: inline-block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
  }
`

export const HeaderCenter = styled.div`
  position: relative;
  .select_item{
    display: inline-block;
    height: 69px;
    padding: 0 19px;
    color: #666;
    line-height: 69px;
    text-decoration: none;
  }
  .select_item:hover{
    color: #fff;
    background-color: #000;
  }
  
  .select_item:last-of-type{
    //background-color: #fff;
  }
  
  .hot{
    position: absolute;
    top: 16px;
    right: -22px;
    display:inline-block;
    width: 28px;
    height: 19px;
    background-position: -192px 1px;
  }
  .active_item{
    position: relative;
    color: #fff;
    background-color: #000;
  }
  .active_item::after{
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 10px;
    height: 10px;

    border-top:0px solid rgba(0,0,0,0);
    border-right:7px solid  rgba(0,0,0,0);
    border-bottom:8px solid #C20C0C;
    border-left:7px solid  rgba(0,0,0,0);
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  .ant-input-affix-wrapper{
    width: 158px;
    height: 32px;
    border-radius: 32px;
  }
  
  .ant-input-affix-wrapper:hover{
    border: transparent;
  }

  .ant-input::-webkit-input-placeholder{
    font-size: 10px;
  }
  
  .creation_box{
    width: 90px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    color: #ccc;
    font-size: 12px;
    margin-left: 12px;
    border: 1px solid #666;
    border-radius: 20px;
  }
  .creation_box:hover{
    border: 1px solid #fff;
    color: #fff;
    cursor: pointer;
  }
  
  .login{
    margin-left: 20px;
    color: #787878;
  }
  .login:hover{
    color: #999;
    cursor: pointer;
  }
`