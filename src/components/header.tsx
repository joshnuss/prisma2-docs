import Link from '../components/link'
import * as React from 'react'
import styled, { css } from 'styled-components'
import styledTS from 'styled-components-ts'
import HeaderLogo from '../icons/Logo'
import Github from '../icons/Git'
import Clear from '../icons/Clear'
import Search from '../components/search'
import Sidebar from '../components/sidebar'
import { HeaderProps } from '../interfaces/Layout.interface'

type HeaderViewProps = {
  headerProps: HeaderProps
}

const HeaderWrapper = styled.div`
  background: radial-gradient(
      37.86% 77.79% at 50% 100%,
      rgba(113, 128, 150, 0.25) 0%,
      rgba(113, 128, 150, 0) 100%
    ),
    linear-gradient(180deg, #1a202c 0%, #2d3748 100%),
    linear-gradient(180deg, #0d0f14 0%, rgba(27, 32, 43, 0) 100%), #2f3747;
  height: 150px;
  img {
    margin-bottom: 0;
  }
  padding: 30px 10px 24px;
  display: flex;
  justify-content: center;

  .container {
    width: 1110px;
  }

  @media (min-width: 0px) and (max-width: 1024px) {
    height: auto;
    padding: 24px 8px 8px;
    flex-direction: column;
    background: #1a202c;
    .container {
      width: 100%;
    }
  }
`

const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 0px) and (max-width: 1024px) {
    padding: 0 16px;
  }
`

const LogoContainer = styled.div`
  padding-right: 0.75rem;
`

const SearchComponent = styled(Search)`
  position: absolute;
  top: 12px;
  left: 12px;
`

const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
  a {
    color: #cbd5e0 !important;
    font-weight: 600;
    &:hover,
    &:active,
    &:focus {
      color: #ffffff !important;
    }
  }

  margin: 0 9rem 0;
  @media (min-width: 0px) and (max-width: 1024px) {
    margin: 0 3rem 0;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    flex-direction: column;
    margin: 0;
    a {
      margin-bottom: 20px;
    }
  }
`

const DocsMobileButton = styled.div`
  background: #4a5568;
  box-shadow: 0px 4px 8px rgba(60, 45, 111, 0.1), 0px 1px 3px rgba(60, 45, 111, 0.15);
  border-radius: 5px;
  color: #cbd5e0;
  display: none;
  padding: 0 14px;
  height: 42px;
  margin-left: 8px;
  font-weight: 600;
  position: relative;
  z-index: 300;
  @media (min-width: 0px) and (max-width: 1024px) {
    display: flex;
    align-items: center;
  }
`

const MobileOnlyNav = styled.div`
  display: none;
  position: absolute;
  z-index: 210;
  top: 0px;
  transition: top 0.35s;
  background: radial-gradient(
      37.86% 77.79% at 50% 100%,
      rgba(113, 128, 150, 0.25) 0%,
      rgba(113, 128, 150, 0) 100%
    ),
    linear-gradient(180deg, #1a202c 0%, #2d3748 100%),
    linear-gradient(180deg, #0d0f14 0%, rgba(27, 32, 43, 0) 100%), #2f3747;
  width: 100%;
  left: 0;
  padding: 0 2rem;
  @media (min-width: 0px) and (max-width: 1024px) {
    top: 120px;
    display: block;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    padding: 2rem 1rem;
  }
`

const SearchContainer = styledTS<{ isSticky: boolean }>(styled.div)`
  margin-top: 27px;
  display: flex;
  justify-content: space-between;
  position: relative;
  ${({ isSticky }: any) =>
    isSticky &&
    css`
      z-index: 120;
      padding: 8px;
      margin-top: 0;
      margin-left: -8px;
      width: 100% !important;
      background: radial-gradient(
          37.86% 77.79% at 50% 100%,
          rgba(113, 128, 150, 0.25) 0%,
          rgba(113, 128, 150, 0) 100%
        ),
        linear-gradient(180deg, #1a202c 0%, #2d3748 100%),
        linear-gradient(180deg, #0d0f14 0%, rgba(27, 32, 43, 0) 100%), #2f3747;
    `};
`

const MenuMobileBtn = styled.a`
  display: none;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: #a0aec0 !important;
  text-transform: uppercase;
  @media (min-width: 0px) and (max-width: 767px) {
    display: block;
  }
`

const NonMobileMenu = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: 0px) and (max-width: 767px) {
    display: none;
  }
`

const Header = ({ headerProps }: HeaderViewProps) => {
  const [showDocsBtn, setShowDocsBtn] = React.useState(true)
  const [showMobileNav, setShowMobileNav] = React.useState(false)
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  const toggleMobileNav = () => setShowMobileNav(!showMobileNav)
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu)

  const changeHitsStatus = (status: boolean) => setShowDocsBtn(!status)

  const Menu = (
    <>
      <NavLinks>
        {headerProps.links.map((headerlink: any, index: number) => (
          <Link
            key={index}
            to={headerlink.link}
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {headerlink.name}
          </Link>
        ))}
      </NavLinks>
      <Link
        to={'https://github.com/prisma'}
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <Github style={{ height: '24px' }} />
      </Link>
    </>
  )

  return (
    <HeaderWrapper>
      <div className={'container'}>
        <HeaderNav>
          <div style={{ display: 'flex' }}>
            <Link
              to={headerProps.logoLink || '/'}
              style={{
                color: 'white',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <LogoContainer>
                <HeaderLogo style={{ height: '24px' }} />
              </LogoContainer>
            </Link>
          </div>
          <NonMobileMenu>{Menu}</NonMobileMenu>
          <MenuMobileBtn onClick={toggleMobileMenu}>
            {showMobileMenu ? <Clear /> : 'Menu'}
          </MenuMobileBtn>
        </HeaderNav>
        <SearchContainer>
          <SearchComponent hitsStatus={changeHitsStatus} />
          {showDocsBtn && (
            <DocsMobileButton onClick={toggleMobileNav}>
              {showMobileNav ? <Clear /> : 'Docs'}
            </DocsMobileButton>
          )}
        </SearchContainer>
      </div>

      {showMobileNav && (
        <MobileOnlyNav>
          <Sidebar isMobile={true} />
        </MobileOnlyNav>
      )}

      {showMobileMenu && <MobileOnlyNav>{Menu}</MobileOnlyNav>}
    </HeaderWrapper>
  )
}

export default Header
