import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter";

describe("Component counter behaviour", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  test("Counter component should have a text", () => {
    let text = wrapper.find("#counter-value").text();
    expect(text).toBe("0");
  });

  test("Function increment and decrement", async () => {
    let btnPlus = wrapper.find("#increment-btn");
    await btnPlus.trigger("click", () => {
      let text = wrapper.find("#counter-value").text();
      expect(text).toBe("1");
    });
  });
});
