import { shallow } from "enzyme";
import Guide from "./components/Guide";
import TestComponent from './components/TestComponent'

describe("Guide", () => {
  it("should have h1 tag with Guide", () => {
    const wrapper = shallow(<Guide />);
    expect(wrapper.find("h1").text()).toBe("Guide");
  });
});


describe("TestComponent", () => {
  it('should pass', () => {
    const wrapper = shallow(<TestComponent flag />);
    expect(wrapper.find("h1").text()).toBe("Test Component");
    wrapper.setProps({flag : false});
    expect(wrapper.find("h1").text()).toBe("Demo Component");
    expect(wrapper.find('p')).toHaveLength(2);
    wrapper.setState({count : 1});
    expect(wrapper.find('p')).toHaveLength(1);
  });
})