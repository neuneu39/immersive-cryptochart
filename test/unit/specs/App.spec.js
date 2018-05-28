import { mount } from '@vue/test-utils';
import App from '@/App';
import Dashboard from '@/components/Dashboard';

describe('App.vue', () => {
  it('should render correct contents', () => {
    const vm = mount(App);
    expect(vm.is(App)).toBe(true);

    const dashboard = vm.find(Dashboard);
    expect(dashboard.is(Dashboard)).toBe(true);
  });
});
