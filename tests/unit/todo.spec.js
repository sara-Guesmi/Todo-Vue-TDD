// tests/components/Todo.spec.js
import { shallowMount } from "@vue/test-utils";
import Todo from "@/components/Todo";

describe("The Todo.vue component", () => {
  it("Can be mounted", () => {
    const wrapper = shallowMount(Todo);
    expect(wrapper.exists()).toBeTruthy();
  });
});
