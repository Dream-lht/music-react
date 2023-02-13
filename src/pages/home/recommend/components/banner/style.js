import styled from "styled-components";

export const BannerMain = styled.div`
  width: 100%;
`

export const BannerContent = styled.div`
  display: flex;
  width: calc(730px + 254px);
  height: 283px;
  margin: 0 auto;
`

export const BannerRight = styled.div`
  width: 283px;
  .download{
    width: 215px;
    background:url("https://s2.music.126.net/style/web2/img/index/download.png?93433e3c8bc7d1eba0e7caecb1e9ca91") no-repeat;
  }
`

export const BannerLeft = styled.div`
  width: 730px;
  height: 283px;
  background-color: skyblue;
  img{
    width: 100%;
    height: 100%;
  }

`

export const BannerItem = styled.div`
  height: 283px;
`