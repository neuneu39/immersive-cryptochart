import { mount } from '@vue/test-utils';
import Chart from '@/components/Chart';

describe('Chart.vue', () => {
  it('should render correct contents', () => {
    const vm = mount(Chart);
    expect(vm.is(Chart)).toBe(true);
  });
});
