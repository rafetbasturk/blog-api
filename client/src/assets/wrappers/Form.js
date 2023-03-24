import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #11113380;
  z-index: 20;

  .form {
    margin: 0;
    width: calc(100% - (2 * var(--size-xs)));
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
export default Wrapper
