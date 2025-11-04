const ProfileSettings = () => {
  return (
    <section className="editCar">
      <div className="container">
        <div className="row">
          <h2 className="title">Profile settings</h2>
          <div className="login-box">
            <form>
              <div className="user-box">
                <input className={false ? "error" : ""} type="text" />
                <label className={false ? "error" : ""}>Name</label>
              </div>
              {false && <span className="error">Error Message</span>}
              <div className="user-box">
                <input className={false ? "error" : ""} type="text" />
                <label className={false ? "error" : ""}>Surname</label>
              </div>
              {false && <span className="error">Error Message</span>}
              <div className="user-box">
                <input className={false ? "error" : ""} type="number" />
                <label className={false ? "error" : ""}>Age</label>
              </div>
              {false && <span className="error">Error Message</span>}
              <div className="user-box">
                <input className={false ? "error" : ""} type="text" />
                <label className={false ? "error" : ""}>Email</label>
              </div>
              {false && <span className="error">Error Message</span>}
              <div className="user-box">
                <input className={false ? "error" : ""} type="text" />
                <label className={false ? "error" : ""}>Phone number</label>
              </div>
              {false && <span className="error">Error Message</span>}
              <div className="user-box">
                <input className={false ? "error" : ""} type="text" />
                <label className={false ? "error" : ""}>Address</label>
              </div>
              {false && <span className="error">Error Message</span>}
              <div
                className="user-box"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p>Admin</p>
                  <input type="radio" name="role" id="admin" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p>User</p>
                  <input type="radio" name="role" id="user" />
                </div>
              </div>
              <div className="user-box">
                <input type="checkbox" />
                <label>Is Active ?</label>
              </div>
              <div className="btn">
                <button>
                  Update Profile
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

export default ProfileSettings;
