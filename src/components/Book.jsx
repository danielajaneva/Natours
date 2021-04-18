import React from "react";

const Book = () => {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <div className="u-margin-buttom-4">
                <h2 className="heading-secondary">Start booking now</h2>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full Name"
                  required
                  id="name"
                />
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Email addres"
                  required
                  id="email"
                />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
              </div>
              <div className="form__group u-margin-buttom-4">
                <div className="form__radio-group">
                  <input
                    id="small"
                    type="radio"
                    className="form__radio-input"
                    name="size"
                  />
                  <label htmlFor="small" className="form__radio-label">
                    {/* cuz we cant design the default radio button in css we create ours */}
                    <span className="form__radio-button" />
                    Small tour group
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    id="large"
                    type="radio"
                    className="form__radio-input"
                    name="size"
                  />
                  <label htmlFor="large" className="form__radio-label">
                    {/* cuz we cant design the default radio button in css we create ours */}
                    <span className="form__radio-button" />
                    Large tour group
                  </label>
                </div>
              </div>
              <div className="form__group">
                <button className="btn btn--green">Next step</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
