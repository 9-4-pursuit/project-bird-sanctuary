import Title from "./Title";
const ContactForm = () => {
  return (
    <>
      <Title title="contact" subTitle="us" />
      <div className="section-center" id="form">
        <form className="contact-form">
          <label htmlFor="firstName">
            <input id="firstName" type="text" placeholder="First Name" />
          </label>
          <label htmlFor="lastName">
            <input id="lastName" type="text" placeholder="Last Name" />
          </label>
          <label htmlFor="email">
            <input id="email" type="text" placeholder="Email" />
          </label>
          <label htmlFor="feedback">
            <textarea
              name="feedback"
              rows={4}
              cols={40}
              placeholder="Write your feedback."
            />
          </label>
          <button type="submit" className="btn btn-form">
            send
          </button>
        </form>
      </div>
    </>
  );
};
export default ContactForm;
