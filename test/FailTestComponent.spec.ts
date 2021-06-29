import { mount, createLocalVue } from '@vue/test-utils'
import CompositionApi from '@vue/composition-api'
// @ts-ignore
import Test from '../components/FailTestComponent.vue'

const localVue = createLocalVue()
localVue.use(CompositionApi)

describe('Test', () => {
  it('should show username', () => {
    const wrapper = mount(Test, { localVue })
    expect(wrapper.find('span').text()).toEqual('test')
  })
})
