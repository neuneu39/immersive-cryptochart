import { mount } from '@vue/test-utils';
import Footer from '@/components/Footer';

describe('Footer.vue', () => {
  it('should render correct contents', () => {
    const vm = mount(Footer);
    const h1 = vm.element;
    expect(vm.is(Footer)).toBe(true);
    expect(h1.textContent).toBe('Tech Play Academy');
  });
});
