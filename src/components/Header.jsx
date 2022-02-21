import styled from 'styled-components';

const Nav = styled.nav`
    min-height: 7rem;
    max-width: 100%;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 3.6rem;
`;
const Logo = styled.img`
    width: 8rem;
`
const NavMenu = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 2.5rem;

    a {
        display: flex;
        align-items: center;
        padding: 0 1.2rem;
        cursor: pointer;

        img {
            height: 2rem;
        }

        span {
            font-size: 1.3rem;
            letter-spacing: 1.42px;
            text-transform: uppercase;
            position: relative;

            &::after {
                content: '';
                height: 2px;
                background-color:#fff;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -8px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }

        }
        &:hover {
            span::after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const UserImg = styled.img`
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    cursor: pointer;
`


const Header = () => {
    return ( 
        <Nav>
            <Logo src='/images/logo.svg' />
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" alt="Home Icon" />
                    <span>Home</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" alt="Search Icon" />
                    <span>Search</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="Watchlist Icon" />
                    <span>Watchlist</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="Originals Icon" />
                    <span>Originals</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt="Movies Icon" />
                    <span>Movies</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt="Series Icon" />
                    <span>Series</span>
                </a>
            </NavMenu>
            <UserImg src='https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg' />
        </Nav>
     );
}
 
export default Header;