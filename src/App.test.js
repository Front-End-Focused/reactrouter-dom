import { shallow } from "enzyme";
import Guide from "./components/Guide";

describe("Guide", () => {
  it("should have h1 tag with Guide", () => {
    const wrapper = shallow(<Guide />);
    expect(wrapper.find("h1").text()).toBe("Guide");
  });
});
