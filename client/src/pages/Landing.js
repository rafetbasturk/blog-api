import { Link, Navigate } from "react-router-dom"
import { useAppContext } from '../context/appContext';
import Wrapper from "../assets/wrappers/Main"

const Landing = () => {
  const { user, isLoading, loginRegister } = useAppContext()

  return (
    <>
      {user && <Navigate to='/posts' />}
      <Wrapper>
        <section className="landing">
          <h1>blog app</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea officiis cumque perferendis dolorum asperiores itaque est amet inventore distinctio maxime vero doloremque, nihil aspernatur eaque optio laudantium minus tenetur? Quibusdam reiciendis, accusamus iusto ducimus corporis mollitia alias ratione minus incidunt aut possimus sint suscipit deleniti ipsam enim. Odio, ipsum?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eum neque sequi sint dolore ex placeat ab, commodi ut quam id molestiae deleniti ratione voluptatem?
          </p>
          <Link to='/register' className='btn'>
            Login / Register
          </Link>
          <button
            type="button"
            className="btn btn-demo"
            disabled={isLoading}
            onClick={() => {
              loginRegister(
                { email: 'tester@gmail.com', password: '1234' },
                'login'
              );
            }}
          >Demo User</button>
        </section>
      </Wrapper>
    </>
  )
}

export default Landing