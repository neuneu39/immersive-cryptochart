import { mount } from '@vue/test-utils';
import Footer from '@/components/Footer';

describe('Footer.vue', () => {
  it('should render correct contents', () => {
    const vm = mount(Footer);
    expect(vm.is(Footer)).toBe(true);
  });
});
