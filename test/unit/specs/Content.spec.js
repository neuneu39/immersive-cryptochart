import { mount } from '@vue/test-utils';
import Content from '@/components/Content';
import Metric from '@/components/Metric';
import Chart from '@/components/Chart';

describe('Content.vue', () => {
  it('should render correct contents', () => {
    const vm = mount(Content);
    expect(vm.is(Content)).toBe(true);

    const metrics = vm.findAll(Metric);
    expect(metrics.length).toBe(6);

    const chart = vm.find(Chart);
    expect(chart.is(Chart)).toBe(true);
  });
});
