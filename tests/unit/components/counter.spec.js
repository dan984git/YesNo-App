import { shallowMount, mount } from "@vue/test-utils";
import Counter from "@/components/Counter";

describe("Counter.vue Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });
  /* test("Debe de hacer match con el snapshot", () => {
    const wrapper = shallowMount(Counter);

    expect(wrapper.html()).toMatchSnapshot();
  }); */
  test('h2 debe tener el valor por defecto "Counter"', () => {
    expect(wrapper.find("h2").exists()).toBeTruthy();
    const h2Value = wrapper.find("h2").text();
    expect(h2Value).toBe("Counter");
  });
  test("El valor por defecto debe de ser 5 en el p", () => {
    const pValue = wrapper.find("[data-testid='counter']");
    expect(pValue.text()).toBe("5");
  });
  test("Debe de incrementar en 1 el valor del contador", async () => {
    const [decreaseBtn, increaseBtn] = wrapper.findAll("button");
    await increaseBtn.trigger("click");
    await decreaseBtn.trigger("click");
    await decreaseBtn.trigger("click");
    const pValue = wrapper.find("[data-testid='counter']").text();
    expect(pValue).toBe("4");
  });
  test("Debe de establecer el valor por defecto", () => {
    const { start } = wrapper.props(); // const start = wrapper.props("start");
    const value = wrapper.find('[data-testid="counter"]').text();
    expect(Number(value)).toBe(start);
  });
  test("Debe de mostrar la prop title", () => {
    const title = "Hola Mundo!!!!!!";
    const wrapper = shallowMount(Counter, {
      props: {
        title,
      },
    });
    expect(wrapper.find("h2").text()).toBe(title);
  });
});
