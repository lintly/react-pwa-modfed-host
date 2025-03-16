import { lazy, Suspense } from "react";

import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";

const Section1Component = lazy(async () =>
  import("section1/MyComponent").catch(() => ({
    default: ({
      onLoadingError,
    }: {
      onLoadingError: (error: Error) => void;
    }) => {
      console.log("Unit error");
      onLoadingError(new Error("Unable to load MyComponent"));
      return <h5>MyComponent Module could not load at this time.</h5>;
    },
  }))
);

const Section2Component = lazy(async () =>
  import("section2/MyComponent").catch(() => ({
    default: ({
      onLoadingError,
    }: {
      onLoadingError: (error: Error) => void;
    }) => {
      console.log("Unit error");
      onLoadingError(new Error("Unable to load MyComponent"));
      return <h5>MyComponent Module could not load at this time.</h5>;
    },
  }))
);

function App() {
  function errorHandler(e: Error) {
    console.error(e.message);
    // Your app is saved from bowing up!
    // Do whatever you want here...
  }

  return (
    <>
      <Header />
      <Counter />
      <div>
        <h1>Section 1</h1>
        <Suspense fallback="loading...">
          <Section1Component onLoadingError={errorHandler} />
        </Suspense>
      </div>
      <div>
        <h1>Section 2</h1>
        <Suspense fallback="loading...">
          <Section2Component onLoadingError={errorHandler} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
