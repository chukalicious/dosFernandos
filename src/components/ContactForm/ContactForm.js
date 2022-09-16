const ContactForm = () => {
  return (
    <div className="flex flex-col">
      <form className="flex flex-col w-full">
        <input
          type="text"
          placeholder="Your First Name"
          className="input input-bordered w-full max-w-xs mx-auto my-3"
        />
        <input
          type="text"
          placeholder="Your Last Name"
          className="input input-bordered w-full max-w-xs mx-auto my-3"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full max-w-xs mx-auto my-3"
        />
        <input
          type="text"
          placeholder="Home Address (Line 1)"
          className="input input-bordered w-full max-w-xs mx-auto my-3"
        />
        <input
          type="text"
          placeholder="Home Address (Line 2)"
          className="input input-bordered w-full max-w-xs mx-auto my-3"
        />
        <input
          type="text"
          placeholder="City"
          className="input input-bordered w-full max-w-xs mx-auto my-3"
        />
        <input
          type="text"
          placeholder="State"
          className="input input-bordered w-full max-w-xs mx-auto my-3"
        />
        <input
          type="text"
          placeholder="Zipcode"
          className="input input-bordered w-full max-w-xs mx-auto my-3"
        />
        <label className="label cursor-pointer w-[50%] max-w-xs mx-auto my-3">
          <input type="checkbox" className="checkbox checkbox-primary" />
          <span className="label-text">You agree to the terms</span>
        </label>
      </form>
    </div>
  );
};

export default ContactForm;
