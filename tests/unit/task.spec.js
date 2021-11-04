import { shallowMount } from "@vue/test-utils";
import Task from "@/components/Task";

describe("Describe the Task component behaviour", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Task, {
      propsData: {
        task: {
          text: "task1",
          id: 1,
          done: false,
        },
      },
    });
  });

  // rendring test
  it("Can be mounted", () => {
    expect(wrapper.exists());
  });
  // showing text
  it(" show the props text and btn existance ", () => {
    let task = wrapper.find("#task");
    let btnDelete = wrapper.find(".btn-delete");
    let btnDone = wrapper.find(".btn-done");
    expect(task.text()).toEqual("task1");
    expect(btnDelete.exists()).toBeTruthy();
    expect(btnDone.exists()).toBe(true);
  });

  // trigger click events
  it("emit events test", async () => {
    // Delete Test
    const btnDelete = wrapper.find(".btn-delete");
    await btnDelete.trigger("click");
    expect(wrapper.emitted("delete-task").length).toBe(1);

    //  Done Test check
    const btnDone = wrapper.find(".btn-done");
    await btnDone.trigger("click");
    expect(wrapper.emitted("done-task").length).toBe(1);
  });
});
