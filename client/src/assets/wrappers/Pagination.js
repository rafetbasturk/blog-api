import styled from 'styled-components'

const Wrapper = styled.section`
  height: 3rem;
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: var(--size-l) var(--size-l) 0;

  .btn-container {
    display: flex;
    border-radius: var(--size-xxs);
    background: var(--tint-80);
  }

  .pageBtn {
    background: transparent;
    border-color: transparent;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--shade-60);
    transition: var(--transition);
    border-radius: var(--borderRadius);
    cursor: pointer;
  }

  .pageBtn:first-of-type {
    border-radius: var(--size-xxs) 0 0 var(--size-xxs);
  }

  .pageBtn:last-of-type {
    border-radius: 0 var(--size-xxs) var(--size-xxs) 0;
  }
  
  .active {
    background: var(--tint-40);
    color: var(--white);
  }

  .prev-btn,
  .next-btn {
    background: var(--tint-40);
  }

  .prev-btn:hover,
  .next-btn:hover {
    color: var(--tint-40);
    background: var(--shade-60);
  }
`
export default Wrapper
