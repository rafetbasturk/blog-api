import { createBrowserRouter } from "react-router-dom";
import Error from '../pages/Error';
import Blog from '../pages/Blog';
import Landing from '../pages/Landing';
import Register from '../pages/Register';
import SharedLayout from '../pages/SharedLayout';
import ProtectedRoute from "../pages/ProtectedRoute";
import PostDetail from '../pages/PostDetail';
import Profile from '../pages/Profile';
import Compose from '../pages/Compose';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    // errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: "posts",
        element: <ProtectedRoute />,
        children: [
          { index: true, element: <Blog /> },
          { path: ":id", element: <PostDetail /> },
          { path: 'compose', element: <Compose /> }
        ]
      },
      { path: 'profile', element: <Profile /> },
      { path: 'register', element: <Register /> },
      { path: "*", element: <Error /> },
    ]
  }
])

// createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<SharedLayout />}>
//       <Route index element={<Landing />} />
//       <Route path="posts" element={<ProtectedRoute />}>
//         <Route index element={<Blog />} />
//         <Route path=':id' element={<PostDetail />} />
//         <Route path='profile' element={<Profile />} />
//         <Route path='compose' element={<Compose />} />
//       </Route>
//       <Route path='register' element={<Register />} />
//       <Route path='*' element={<Error />} />
//     </Route>
//   ))