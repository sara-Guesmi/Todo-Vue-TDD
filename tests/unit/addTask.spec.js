import { shallowMount } from "@vue/test-utils";
import AddTask from "@/components/AddTask";

// addTask
// recieve a function and send an input to the list
describe("The add Task component behaviour", () => {
  it("allows for adding one todo item", async () => {
    const wrapper = shallowMount(AddTask);
    wrapper.find('[data-testid="todo-input"]').setValue("My first todo item");
    await wrapper.find('[data-testid="todo-submit"]').trigger("click");
    expect(wrapper.find('[data-testid="todos"]').text()).toContain(
      "My first todo item"
    );
  });
});
