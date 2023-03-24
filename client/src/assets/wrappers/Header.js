import styled from 'styled-components'

const Wrapper = styled.header`
  height: var(--size-header);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--size-xs);
  box-shadow: 0 1px 0px 0px var(--tint-50);
  padding: 0 1rem;
  background: var(--tint-100);

  .logo {
    width: 180px;
    object-fit: contain;
  }

  .menu {
    color: #5555ff;
    width: var(--size-xl);
    height: var(--size-xl);
  }

  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 0 5rem;

    .logo {
      width: 200px;
    }

    .menu-icons {
      display: none;
    }
  }
`
export default Wrapper
