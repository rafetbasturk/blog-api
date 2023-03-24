import styled from 'styled-components'

const Wrapper = styled.section`
  padding: var(--size-xxl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    max-width: 400px;
    margin-bottom: 2rem;
  }

  p {
    color: var(--tint-10);
  }
`
export default Wrapper
