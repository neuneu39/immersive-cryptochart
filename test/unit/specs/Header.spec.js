import { mount } from '@vue/test-utils';
import Header from '@/components/Header';

describe('Header.vue', () => {
  it('should render correct contents', () => {
    const vm = mount(Header);
    expect(vm.is(Header)).toBe(true);
  });
});
