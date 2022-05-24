import React from 'react'
//import styledComponents from 'styled-components'
import styled from 'styled-components'

const Nav = styled.div`
   height : 70px ;
   background-color: #090b13;
   color : white;
   display: flex;
   //justify-content: space-between;
   align-items: center;
   padding: 0 36px;
`
const Logo = styled.img`
    width: 80px;
    
`
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;

  //justify-content: space-between;
  /* border: 1px solid yellow;  */
  width: 90%; 
  a{
      display:flex;
        align-items: center;
        padding: 0 10px;
        cursor: pointer;
        img{
            width: 30px;
            height: 20px;
        }
        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            
            &::after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left:0;
                right: 0;
                bottom: -7px;
                opacity: 0;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
  }


`
const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`

const Header = () => {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a>
                    <img src='/images/home-icon.svg' />
                    <span>Home</span>
                </a>
                <a>
                    <img src='/images/search-icon.svg' />
                    <span>Search</span>
                </a>
                <a>
                    <img src='/images/watchlist-icon.svg' />
                    <span>WatchList</span>
                </a>
                <a>
                    <img src='/images/original-icon.svg' />
                    <span>Originals</span>
                </a>
                <a>
                    <img src='/images/movie-icon.svg' />
                    <span>Movies</span>
                </a>
                <a>
                    <img src='/images/series-icon.svg' />
                    <span>Series</span>
                </a>
                
            </NavMenu>
            <UserImg src = 'https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1'/>
        </Nav>
    )
}

export default Header