import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllCars = () => {
  return (
    <section className="allCars">
      <div className="container">
        <div className="row">
          <h2 className="title">All Cars List</h2>
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Car Image</th>
                <th>Car Name</th>
                <th>Car Details</th>
                <th>Car Price</th>
                <th>Edit Car</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="carImg">
                  <img src="" alt="car-image" />
                </td>
                <td>Car Name</td>
                <td>Car Details</td>
                <td>Car Price AZN</td>
                <td className="edit">
                  <Link to={`/create-car`}>
                    <FaEdit />
                  </Link>
                  <FaTrash />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllCars;
