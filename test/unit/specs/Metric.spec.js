import { mount } from '@vue/test-utils';
import Metric from '@/components/Metric';

describe('Metric.vue', () => {
  it('should render correct contents', () => {
    const vm = mount(Metric, {
      propsData: {}, // TODO
    });
    expect(vm.is(Metric)).toBe(true);
  });
});
