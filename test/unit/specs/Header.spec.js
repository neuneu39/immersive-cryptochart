import { mount } from '@vue/test-utils';
import Header from '@/components/Header';

describe('Header.vue', () => {
  it('should render correct contents', () => {
    const vm = mount(Header);
    const h1 = vm.element;
    expect(vm.is(Header)).toBe(true);
    expect(h1.textContent).toBe('Cryptocurrency Dashboard');
  });
});
