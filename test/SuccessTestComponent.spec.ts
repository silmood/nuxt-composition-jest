import { mount } from '@vue/test-utils'
// @ts-ignore
import Test from '../components/SuccessTestComponent.vue'

describe('Test', () => {
  it('should show username', () => {
    const wrapper = mount(Test)
    expect(wrapper.find('span').text()).toEqual('test')
  })
})
