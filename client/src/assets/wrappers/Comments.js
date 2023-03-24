import styled from "styled-components";

const Wrapper = styled.section`
  padding: var(--size-l) var(--size-sm);
  border: 1px solid var(--tint-70);
  border-radius: var(--size-xxs);

  h4 {
    margin: 0;
    font-size: var(--size-ml);
  }

  .comment {
    display: flex;
    flex-direction: column;
    gap: var(--size-xs);
    padding: var(--size-xs) 0;
    border-bottom: 1px solid var(--tint-70);
    position: relative;
  }

  .comment:last-of-type {
    border-bottom: none;
  }

  .comment-profile {
    display: flex;
    align-items: center;
    align-self: flex-end;
    gap: var(--size-s);
  }

  .profile-pic {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .comment-text {
    font-style: oblique;
    font-size: var(--size-sm);
  }

  .comment-profile p {
    font-size: var(--size-s);
    color: var(--shade-10);
  }

  .comment-panel {
    position: absolute;
    bottom: 0;
    transform: translateY(-50%);
  }

  .comment-panel .btn {
    padding: 0;
    background: transparent;
    color: var(--shade-30);
  }

  .comment-panel svg {
    width: 24px;
    height: 24px;
  }
`
export default Wrapper
