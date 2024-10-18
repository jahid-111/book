import { useState } from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();
  const [isChecked, setIsChecked] = useState(false);
  console.log(id);

  const handleSubmitPay = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      cardNumber: e.target.cardNumber.value,
      expireDate: e.target.expireCardDate.value,
      CVV: e.target.CVV.value,
    };

    console.log(formData);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={(e) => handleSubmitPay(e)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Valid Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Card Number</span>
            </label>
            <input
              type="number"
              name="cardNumber"
              placeholder="1234-1234-1234-1234"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">CVV Number</span>
            </label>
            <input
              type="number"
              name="CVV"
              placeholder="CVV-000"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Expiry Date</span>
            </label>
            <input
              type="date"
              name="expireCardDate"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Accept Our Terms And Condition</span>
            </label>

            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked((isChecked) => !isChecked)}
              className="checkbox"
            />
          </div>
          <div type="submit" className="form-control mt-6">
            <button disabled={!isChecked} className="btn btn-primary">
              Pay $(999)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
