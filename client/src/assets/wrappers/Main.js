import styled from 'styled-components'

const Wrapper = styled.main`
  padding: var(--size-l) var(--size-s);
  margin-bottom: 5rem;
  
  .posts-container {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: var(--size-l); 
  }

  .post-link {
    padding: 0;
  }

  .post-link:hover {
    background: transparent;
  }

  .post-card {
    font-size: var(--size-sm);
    transition: var(--transition);
    position: relative;
    height: 250px;
  }

  .post-card img {
    border-radius: var(--size-xxs);
  }

  .post-card:hover {
    transform: scale(1.02);
  }

  .post-info-container {
    position: absolute;
    background: #19194c6a;
    clip-path: polygon(0 0, 50% 0, 80% 100%, 0% 100%);
    border-radius: 0 0 var(--size-xxs) var(--size-xxs);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: var(--tint-80);
  }

  .post-info {
    position: absolute;
    width: 70%;
    bottom: 0;
    left: 0;
    padding: var(--size-xs);
  }

  .post-info h3 {
    margin: 0;
    text-align: left;
  }

  .post-info p {
    margin-bottom: 0;
  }

  p {
    display: flex;
    align-items: center;
    gap: var(--size-xxs);
  }

  .profile,
  .landing {
    max-width: 600px;
    margin: 3rem auto 0;
  }

  .btn-demo {
    width: 100%;
    margin-top: var(--size-xxs);
  }

  @media (min-width: 992px) {
    padding: 3rem 5rem;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 14rem);
    overflow-y: scroll;
    justify-content: space-between;
  }
`
export default Wrapper
