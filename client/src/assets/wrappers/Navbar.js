import styled from 'styled-components'

const Wrapper = styled.nav`
  position: absolute;
  width: calc(100% - 2rem);
  top: -120%;
  padding: var(--size-m);
  background: var(--tint-90);
  box-shadow: 0 3px 6px var(--shade-50);
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 10;
  transition: var(--transition);

  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .user {
    width: 100%;
    max-width: 400px;
    align-self: center;
    position: relative;
  }

  .btn-profile {
    display: flex;
    gap: 1.6rem;
  }

  .profile-icon {
    width: 24px;
    height: 24px;
  }

  .user-menu {
    width: 100%;
    position: absolute;
    top: 40px;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-20px);
    transition: var(--transition);
  }

  .btn-logout {
    width: 100%;
    margin-top: 3px;
  }

  .profile-link:hover {
    background: var(--shade-60);
    color: var(--tint-60);
    padding-left: var(--size-s);
  }

  .profile-link::after {
    display: none;
  }
  
  .show {
    visibility: visible;
    transform: translateY(0);
    opacity: 1;
  }

  hr {
    width: 100%;
    margin: 0;
    border: 1px solid var(--tint-80);
  }

  @media (min-width: 992px) {
    position: static;
    background: transparent;
    box-shadow: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    padding: var(--size-m) var(--size-xxs);

    .links {
      flex-direction: row;
      gap: 2rem;
    }

    a:hover {
      background: transparent;
      padding-left: 0;
    }

    a::after {
      display: block;
      content: '';
      width: 100%;
      margin-top: .3rem;
      border-bottom: 2px solid var(--primary);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 250ms ease-in-out;
    }
    
    a:hover::after {
      transform: scaleX(1);
      transform-origin: right;
    }

    .user {
      width: 150px;
    }

    hr {
      display: none;
    }
  }

`
export default Wrapper
