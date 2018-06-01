import { mount } from '@vue/test-utils';
import Metric from '@/components/Metric';

describe('Metric.vue', () => {
  it('should render correct contents', () => {
    const vm = mount(Metric, {
      propsData: {
        label: 'test-label',
        value: 'test-value',
      },
    });
    expect(vm.is(Metric)).toBe(true);
    expect(vm.find('.metric-label').element.textContent).toBe('test-label');
    expect(vm.find('.metric-value').element.textContent).toBe('test-value');
    // こういう書き方もOK
    // expect(vm.element.querySelector('.metric-label').textContent).toBe('test-label');
    // expect(vm.element.querySelector('.metric-value').textContent).toBe('test-value');
  });
});
