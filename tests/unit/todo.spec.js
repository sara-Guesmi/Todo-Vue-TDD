// tests/components/Todo.spec.js
import { shallowMount } from "@vue/test-utils";
import TodoList from "@/components/TodoList";

describe("The TodoList.vue component", () => {
  it("Can be mounted", () => {
    const wrapper = shallowMount(TodoList);
    expect(wrapper.exists()).toBeTruthy();
  });
  it("display a title passed as a props", () => {
    const wrapper2 = shallowMount(TodoList, {
      propsData: {
        title: "random title",
      },
    });
    expect(wrapper2.text()).toMatch("random title");
  });
});
