import { setActivePinia, createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import ShoppingItem from '@/components/ShoppingItem.vue';
import { ShoppingItem as ShoppingItemClass } from '@/classes/Shopping';
import { config } from '@vue/test-utils'

// Hides irrelevant Pinia warning. 
config.global.config.warnHandler = () => {}

describe('ShoppingItem.vue', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('renders properties', async () => {
    const shoppingItem = new ShoppingItemClass({
      id: "SomeId",
      name: "Mustard",
      price: 3
    });

    const wrapper = await mount(ShoppingItem, {
      props: {
        shoppingItem
      }
    });

    expect((wrapper.find("#nameValue").element as HTMLInputElement).value).toBe("Mustard");
    expect((wrapper.find("#priceValue").element as HTMLInputElement).value).toBe("3");
  })
});