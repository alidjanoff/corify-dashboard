import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <section className="allCars">
      <div className="container">
        <div className="row">
          <h2 className="title">Profile</h2>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              className="leftSide"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                width={250}
                height={250}
                src=""
                alt="profile-picture"
                style={{
                  borderRadius: "50%",
                  backgroundColor: "orangered",
                }}
              />
            </div>
            <div
              className="rightSide"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 12,
              }}
            >
              <h2>Jhon Doe</h2>
              <p>Age: </p>
              <Link to={`mailto:${""}`}>Email: </Link>
              <Link to={`tel:${""}`}>Phone number: </Link>
              <Link to={`http://maps.google.com/?q=${""}`} target="_blank">
                Address:
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
