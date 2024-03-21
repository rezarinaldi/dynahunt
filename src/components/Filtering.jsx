export const Filtering = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-center px-6 gap-3 my-8">
      <ul className="menu bg-[#FCE72D] w-56 rounded-box">
        <li>
          <details>
            <summary>Content Type</summary>
            <ul>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
      <ul className="menu bg-[#FCE72D] w-56 rounded-box">
        <li>
          <details>
            <summary>Number of Followers</summary>
            <ul>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
      <ul className="menu bg-[#FCE72D] w-56 rounded-box">
        <li>
          <details>
            <summary>Rate</summary>
            <ul>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>

      <div className="join">
        <div>
          <div>
            <input
              className="input input-bordered join-item"
              placeholder="Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
