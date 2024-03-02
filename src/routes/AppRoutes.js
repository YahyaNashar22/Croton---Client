import React from "react";
import { Routes, Route } from "react-router-dom";
import NavFooterOutlet from "./NavFooterOutlet.js";
import Loading from "../components/Loading/Loading.js";
import ProtectedRoute from "./ProtectedRoute.js";
import NotFound from "../components/NotFound/NotFound.js";

const LazyHome = React.lazy(() => import("../pages/Home/Home.js"));
const LazyBody = React.lazy(() => import("../pages/BodyPage/BodyPage.js"));
const LazyMind = React.lazy(() => import("../pages/MindPage/MindPage.js"));
const LazyNutritionCenter = React.lazy(() =>
  import("../pages/NutritionCenterPage/NutritionCenterPage.js")
);
const LazyLogin = React.lazy(() => import("../pages/LoginPage/LoginPage.js"));
const LazySignup = React.lazy(() =>
  import("../pages/SignupPage/SignupPage.js")
);
const LazyExtraInfo = React.lazy(() =>
  import("../pages/ExtraInfoPage/ExtraInfoPage.js")
);
const LazyProfile = React.lazy(() =>
  import("../pages/ProfilePage/ProfilePage.js")
);
const LazyExercise = React.lazy(() =>
  import("../pages/ExercisePage/ExercisePage.js")
);
const LazySingleExercise = React.lazy(() =>
  import("../pages/SingleExercisePage/SingleExercisePage.js")
);
const LazyTrainingPlan = React.lazy(() =>
  import("../pages/TrainingPlanPage/TrainingPlanPage.js")
);
const LazySingleTrainingPlan = React.lazy(() =>
  import("../pages/SingleTrainingPlanPage/SingleTrainingPlanPage.js")
);
const LazyBook = React.lazy(() => import("../pages/BookPage/BookPage.js"));
const LazySingleBook = React.lazy(() =>
  import("../pages/SingleBookPage/SingleBookPage.js")
);
const LazyGamePage = React.lazy(()=>import("../pages/GamePage/GamePage.js"))

function AppRoutes() {
  
  return (
    <Routes>
      <Route exact path="/" element={<NavFooterOutlet />}>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyHome />
            </React.Suspense>
          }
        />
        <Route
          path="/nutrition-center"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyNutritionCenter />
            </React.Suspense>
          }
        />
        <Route element={<ProtectedRoute />}>
        <Route
          path="/body"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyBody />
            </React.Suspense>
          }
        />
        <Route
          path="/mind"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyMind />
            </React.Suspense>
          }
        />
        <Route
          path="/exercises"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyExercise />
            </React.Suspense>
          }
        />
        <Route
          path="/singleexercise/:id"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazySingleExercise />
            </React.Suspense>
          }
        />
        <Route
          path="/trainingplans"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyTrainingPlan />
            </React.Suspense>
          }
        />
        <Route
          path="/singletrainingplan/:id"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazySingleTrainingPlan />
            </React.Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyProfile />
            </React.Suspense>
          }
        />
        <Route
          path="/books"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyBook />
            </React.Suspense>
          }
        />
        <Route
          path="/singlebook/:id"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazySingleBook />
            </React.Suspense>
          }
        />
        <Route
          path="/games"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyGamePage />
            </React.Suspense>
          }
        />
        </Route>
      </Route>
      <Route
        path="/login"
        element={
          <React.Suspense fallback={<Loading />}>
            <LazyLogin />
          </React.Suspense>
        }
      />
      <Route
        path="/signup"
        element={
          <React.Suspense fallback={<Loading />}>
            <LazySignup />
          </React.Suspense>
        }
      />
      <Route
        path="/extrainfo"
        element={
          <React.Suspense fallback={<Loading />}>
            <LazyExtraInfo />
          </React.Suspense>
        }
      />
      <Route
        path="/*"
        element={
          <React.Suspense fallback={<Loading />}>
            <NotFound />
          </React.Suspense>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
