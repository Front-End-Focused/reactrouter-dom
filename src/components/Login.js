function Login() {
  return (
    <div id="login">
      <form>
        <h1 className="display-5 m-4">Login</h1>
        <input type="text" className="m-3" placeholder="Name"></input>
        <input type="password" placeholder="Password"></input>
        <button type="submit" className="m-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
