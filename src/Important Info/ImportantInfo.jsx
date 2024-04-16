const ImportantInfo = () => {
  return (
    <>
      <h1 className="text-3xl mb-2">React</h1>

      <h2 className="text-2xl">What is React?</h2>
      <p>
        React is a JavaScript library/framework for building User Interfaces. It
        was created by Facebook.
      </p>

      <h2 className="text-2xl mt-2">Why React?</h2>
      <ol>
        <li>
          1. React allows us build very interactive and dynamic websites/UIs
        </li>
        <li>2. Best framework to learn and get a job with.</li>
      </ol>

      <h2 className="text-2xl mt-2">Component:</h2>
      <p>
        1. Reusable piece of code that can be used to build elements on the page
      </p>
      <p>
        2. Allows us to break down complex UIs, which makes them easier to
        maintain and scale.
      </p>
      <p>
        3. Components can get 'props' passed in and can hold their own state.
      </p>

      <h2 className="text-2xl mt-2">State:</h2>
      <p>
        1. State represents the data that a Component manages internally. Eg:
        Form input data, fetched data, UI-related like a modal is open or closed
      </p>
      <p>Global state relates to the app as a whole, not single Component.</p>

      <h2 className="text-2xl mt-2">JavaScript Syntax Extension (JSX):</h2>
      <p>An HTML-like syntax within JavaScript (component).</p>
    </>
  );
};
export default ImportantInfo;
