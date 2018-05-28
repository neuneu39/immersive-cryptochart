import { mount } from '@vue/test-utils';
import Dashboard from '@/components/Dashboard';
import Content from '@/components/Content';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

describe('Dashboard.vue', () => {
  it('should render correct contents', () => {
    const vm = mount(Dashboard);
    expect(vm.is(Dashboard)).toBe(true);

    const content = vm.find(Content);
    expect(content.is(Content)).toBe(true);

    const header = vm.find(Header);
    expect(header.is(Header)).toBe(true);

    const footer = vm.find(Footer);
    expect(footer.is(Footer)).toBe(true);
  });
});
