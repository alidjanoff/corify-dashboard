const CreateCar = () => {
  return (
    <section className="createCar">
      <div className="container">
        <div className="row">
          <h2 className="title">Add new car</h2>
          <div className="login-box">
            <form>
              <div className="user-box">
                <input className={false ? "error" : ""} type="text" />
                <label className={false ? "error" : ""}>Car Name</label>
              </div>
              {false && <span className="error">Error Message</span>}
              <div className="user-box">
                <input className={false ? "error" : ""} type="text" />
                <label className={false ? "error" : ""}>Car Details</label>
              </div>
              {false && <span className="error">Error Message</span>}
              <div className="user-box">
                <input className={false ? "error" : ""} type="number" />
                <label className={false ? "error" : ""}>Car Price</label>
              </div>
              {false && <span className="error">Error Message</span>}
              <div className="user-box">
                <input type="file" name="productImage" id="cImg" />
                {true && (
                  <div className="previewImage">
                    <img src="" alt="car-image" />
                  </div>
                )}
              </div>
              <div className="btn">
                <button>
                  Add car
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

export default CreateCar;
