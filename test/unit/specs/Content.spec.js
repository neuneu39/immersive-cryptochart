import { mount } from '@vue/test-utils';
import Content from '@/components/Content';

describe('Content.vue', () => {
  it('should render correct contents', () => {
    const vm = mount(Content);
    expect(vm.is(Content)).toBe(true);
  });
});
