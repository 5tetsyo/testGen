import ErrorBoundary from "./components/Pages/ErrorPage/ErrorBoundaryPage";
import RouteCoursesApp from "./components/routes/RouteCoursesApp";

function App() {
  return (
      <ErrorBoundary>
        <RouteCoursesApp/>
      </ErrorBoundary>
  );
};
export default App;

