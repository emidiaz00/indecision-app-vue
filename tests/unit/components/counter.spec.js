import Counter from '@/components/Counter'
import { shallowMount, mount } from '@vue/test-utils'

describe('Counter component', () => {
    test('should be equal to snapshot', () => { 
        const wrapper = shallowMount(Counter)
        expect(wrapper.html()).toMatchSnapshot()
     })
     test('should increase value of counter', () => { 
        const wrapper = shallowMount(Counter)
        const increaseBtn = wrapper.find('button')

        increaseBtn.trigger('click')
        const value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('100')
      })
});

