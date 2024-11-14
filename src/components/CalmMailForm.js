import React from 'react';

function CalmMailForm() {

  return (
    <section className="calm__mail-form">
      <div className="container">
        <div className="calm-mail-form__inner">
          <h4 className="calm-mail-form_title title">
            Lorem ipsum dolor sit amet consectetur.
          </h4>
          <form>
            <label htmlFor="email" className="text">Введите ваш адрес почты:</label>
            <input
              className="calm-mail-form_mail"
              type="email"
              id="email"
              name="email"
              value=""
            />
            <button type="submit" className="btn">Подписаться</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CalmMailForm;

