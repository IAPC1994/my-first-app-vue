import { mount } from '@vue/test-utils';
import CounterVue from '@/components/CounterVue.vue';

describe('Testing <CounterVue />', () => {
  test('Should match snapshot', () => {
    const wrapper = mount(CounterVue, {
      props: {
        value: 5,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Renders the counter value correctly', () => {
    const value = 5;
    const wrapper = mount(CounterVue, {
      props: {
        value: value,
      },
    });
    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    expect(wrapper.find('[data-testid = "square-label"]').text()).toContain(
      `Square: ${value * value}`,
    );

    expect(counterLabel.text()).toContain(`Counter: ${value}`);
    expect(squareLabel.text()).toContain(`Square: ${value * value}`);
  });
});
