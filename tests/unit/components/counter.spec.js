import Counter from '@/components/Counter'
import { shallowMount, mount } from '@vue/test-utils'

describe('Counter component', () => {
    test('should be equal to snapshot', () => { 
        const wrapper = shallowMount(Counter)
        expect(wrapper.html()).toMatchSnapshot()
     })
     test('should increase value of counter', async () => { 
        const wrapper = shallowMount(Counter)
        const increaseBtn = wrapper.find('button')

        increaseBtn.trigger('click')
        let value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('100')

        const decreaseBtn = wrapper.findAll('button')[1]

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('99')
      })
});

