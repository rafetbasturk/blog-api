import styled from 'styled-components'

const Wrapper = styled.main`
  padding: var(--size-l) var(--size-xs);
  display: flex;
  flex-direction: column;
  gap: var(--size-m);
  max-width: 900px;
  margin: 0 auto 6rem;

  .post {
    display: flex;
    flex-direction: column;
    gap: var(--size-m);
  }

  .post img {
    max-width: 375px;
    height: 250px;
    margin: auto;
  }

  h3, p {
    margin: 0;
  }

  h3 {
    font-size: var(--size-l);
  }

  .text {
    text-align: justify;
  }

  .post-panel .btn {
    gap: 1rem;
  }
  .post-panel svg {
    width: 24px;
    height: 24px;
  }

  .add-comment {
    width: 200px;
    color: var(--tint-70);
    background: var(--shade-80);
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-transform: capitalize;
    border: transparent;
    border-radius: 22px;
    opacity: .85;
    position: sticky;
    bottom: 8rem;
  }

  @media (min-width: 992px) {
    padding: 3rem 5rem;
    gap: var(--size-xl);

    .post img {
      max-width: 600px;
      height: 400px;
      margin: auto;
    }

    h3 {
      font-size: var(--size-xl);
    }

    .add-comment {
      position: fixed;
      right: 10rem;
      bottom: 10rem;
    }
  }
`
export default Wrapper