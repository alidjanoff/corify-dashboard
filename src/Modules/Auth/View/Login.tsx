const Login = () => {
  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <h2>Login Page</h2>
          <div className="login-box">
            <form>
              <div className="user-box">
                <input type="email" />
                <label>Email</label>
              </div>
              {false && <span>Error Message</span>}
              <div className="user-box">
                <input type="password" />
                <label>Password</label>
              </div>
              {false && <span>Error Message</span>}
              <div>
                <button>
                  Login
                  <span></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
