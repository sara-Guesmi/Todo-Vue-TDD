// tests/components/Todo.spec.js
import { shallowMount } from "@vue/test-utils";
import TodoList from "@/components/TodoList";

describe("The TodoList.vue component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(TodoList, {
      propsData: {
        title: "random Test",
        todos: [],
      },
    });
  });

  it("Can be mounted", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("display a title passed as a props", () => {
    expect(wrapper.find("#title").text()).toMatch("random Test");
  });
});
