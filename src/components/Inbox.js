function Inbox() {
  return (
    <div id="inbox">
      <h1 className="display-5">Inbox</h1>
      <table className="table table-borderless table-striped">
        <tbody>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <td>Google</td>
            <td>Here's how you can manage your storage</td>
          </tr>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <td>Community Digest</td>
            <td>Master Frontend Development </td>
          </tr>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <td>Spotify</td>
            <td>Introducing Blend. Two besties. One perfect playlist.</td>
          </tr>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <td>Microsoft account team</td>
            <td>Microsoft account password reset</td>
          </tr>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <td>Stefan</td>
            <td>Developer update</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Inbox;
