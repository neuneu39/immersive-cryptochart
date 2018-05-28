import { mount } from '@vue/test-utils';
import Metric from '@/components/Metric';

describe('Metric.vue', () => {
  it('should render correct contents', () => {
    const vm = mount(Metric);
    expect(vm.is(Metric)).toBe(true);
  });
});
