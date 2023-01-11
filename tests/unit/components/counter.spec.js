import Counter from '@/components/Counter'
import { shallowMount, mount } from '@vue/test-utils'

describe('Counter component', () => {
    test('should be equal to snapshot', () => { 
        const wrapper = shallowMount(Counter)
        expect(wrapper.html()).toMatchSnapshot()
     })
});

