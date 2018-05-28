import { mount } from '@vue/test-utils';
import Dashboard from '@/components/Dashboard';

describe('Dashboard.vue', () => {
  it('should render correct contents', () => {
    const vm = mount(Dashboard);
    expect(vm.is(Dashboard)).toBe(true);
  });
});
