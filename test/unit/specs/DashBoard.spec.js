import { mount } from '@vue/test-utils';
import DashBoard from '@/components/DashBoard';

describe('DashBoard.vue', () => {
  it('should render correct contents', () => {
    const vm = mount(DashBoard);
    expect(vm.is(DashBoard)).toBe(true);
  });
});
