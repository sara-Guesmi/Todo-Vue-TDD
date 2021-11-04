import { shallowMount } from "@vue/test-utils";
import AddTask from "@/components/AddTask";

// addTask
// recieve a function and send an input to the list
describe("The add Task component behaviour", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AddTask);
  });
  // rendring Test
  it("rendring test", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
