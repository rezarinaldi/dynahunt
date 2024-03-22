export const ProfileForm = () => {
  return (
    <form
      onSubmit={""}
      method={""}
      className="p-6 rounded-lg mb-4 shadow-sm bg-base-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 gap-y-2">
        <div className="form-control md:col-span-4">
          <label className="label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            // value={event.title}
            // onChange={handleChange}
            placeholder="Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control md:col-span-4">
          <label className="label">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            // value={event.date}
            // onChange={handleChange}
            placeholder="Username"
            className="input input-bordered"
          />
        </div>
        <div className="form-control md:col-span-4">
          <label className="label">Phone Number Manager</label>
          <input
            type="number"
            id="phone_number"
            name="phone_number"
            // value={event.image}
            // onChange={handleChange}
            className="input input-bordered"
          />
        </div>
        <div className="form-control md:col-span-4">
          <label className="label">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            // value={event.date}
            // onChange={handleChange}
            placeholder="Location"
            className="input input-bordered"
          />
        </div>
        <div className="form-control md:col-span-4">
          <label className="label">Followers</label>
          <input
            type="number"
            id="follower"
            name="follower"
            // value={event.title}
            // onChange={handleChange}
            className="input input-bordered "
          />
        </div>
        <div className="form-control md:col-span-4">
          <label className="label">Rate</label>
          <input
            type="number"
            id="rate"
            name="rate"
            // value={event.image}
            // onChange={handleChange}
            className="input input-bordered "
          />
        </div>
        <div className="form-control lg:col-span-8 md:col-span-full">
          <label className="label">Biografi</label>
          <textarea
            id="bio"
            name="bio"
            // value={event.description}
            // onChange={handleChange}
            className="textarea textarea-bordered textarea-lg"
            placeholder="Biografi"
          ></textarea>
        </div>
        <div className="form-control md:col-span-4">
          <label className="label">Content Type</label>
          <input
            type="text"
            id="category"
            name="category"
            // value={event.title}
            // onChange={handleChange}
            placeholder="Content Type"
            className="input input-bordered "
          />
        </div>
        <div className="form-control md:col-span-4">
          <label className="label">Sample Content</label>
          <input
            type="text"
            id="sample_content"
            name="sample_content"
            // value={event.image}
            // onChange={handleChange}
            placeholder="URL Sample Content"
            className="input input-bordered "
          />
        </div>
        <div className="form-control md:col-span-4">
          <label className="label">Photo</label>
          <input
            type="file"
            id="photo"
            name="photo"
            // onChange={handleChange}
            className="file-input file-input-ghost bg-base-200"
          />
        </div>
        <div className="form-control md:col-span-4">
          <label className="label">Preview Photo</label>
          <div className="avatar">
            <div className="w-32 rounded">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="btn bg-[#601FCE] text-base-200 hover:bg-[#FCE72D] hover:text-neutral mt-4"
        >
          Update Profile
        </button>
      </div>
    </form>
  );
};
