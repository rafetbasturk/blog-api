import Wrapper from "../assets/wrappers/Main";
import { FormPost } from "../components"

const Compose = () => {
  return (
    <Wrapper>
      <div className="compose">
        <h1>Create Post</h1>
        <FormPost />
      </div>
    </Wrapper>
  );
}
export default Compose