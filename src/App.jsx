import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
// components
import Navbar from "./Components/Common/Navbar";
import OpenRoute from "./Components/core/Auth/OpenRoute";

// data
import { ACCOUNT_TYPE } from "./utils/constants";

// pages import
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import UpdatePassword from "./Pages/UpdatePassword";
import VerifyEmail from "./Pages/VerifyEmail";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import MyProfile from "./Components/core/Dashboard/MyProfile";
import PrivateRoute from "./Components/core/Auth/PrivateRoute";
import Dashboard from "./Pages/Dashboard";
import Error from "./Pages/Error";
import Settings from "./Components/core/Dashboard/Settings/index";
import EnrolledCourses from "./Components/core/Dashboard/EnrolledCourses";
import Cart from "./Components/core/Dashboard/Cart";
import AddCourse from "./Components/core/Dashboard/AddCourse";
import MyCourses from "./Components/core/Dashboard/MyCourses";
import EditCourse from "./Components/core/Dashboard/EditCourse";
import Catalog from "./Pages/Catalog";
import CourseDetails from "./Pages/CourseDetails";
import ViewCourse from "./Pages/ViewCourse";
import VideoDetails from "./Components/core/ViewCourse/VideoDetails";
import Instructor from "./Components/core/Dashboard/Instructor";

function App() {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex flex-col font-inter '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='courses/:courseId' element={<CourseDetails />} />
        <Route path='catalog/:catalogName' element={<Catalog />} />

        <Route
          path='signup'
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path='login'
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path='forgot-password'
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path='update-password/:id'
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path='verify-email'
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path='dashboard/my-profile' element={<MyProfile />} />
          <Route path='dashboard/Settings' element={<Settings />} />
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route path='dashboard/cart' element={<Cart />} />
              <Route
                path='dashboard/enrolled-courses'
                element={<EnrolledCourses />}
              />
            </>
          )}
          <Route path='dashboard/Settings' element={<Settings />} />
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path='dashboard/instructor' element={<Instructor />} />
              <Route path='dashboard/my-courses' element={<MyCourses />} />
              <Route path='dashboard/add-course' element={<AddCourse />} />
              <Route
                path='dashboard/edit-course/:courseId'
                element={<EditCourse />}
              />
            </>
          )}
        </Route>

        {/* For the watching course lectures */}
        <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path='view-course/:courseId/section/:sectionId/sub-section/:subSectionId'
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>

        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
