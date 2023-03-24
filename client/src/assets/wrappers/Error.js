import styled from 'styled-components'

const Wrapper = styled.main`
  padding: var(--size-xxl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .error-page {
    margin: 3rem auto 0;
  }

  img {
    max-width: 400px;
    margin-bottom: 2rem;
  }

  p {
    color: var(--tint-10);
  }

  a {
    color: var(--shade-50);
  }
`

export default Wrapper
