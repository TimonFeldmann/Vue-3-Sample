import { setActivePinia, createPinia } from 'pinia'
import { mount } from '@vue/test-utils'

import ShoppingItem from '@/components/ShoppingItem.vue';
import { ShoppingItem as ShoppingItemClass } from '@/classes/Shopping';

let plugins = [] as any[];

describe('ShoppingItem.vue', () => {
  beforeEach(() => {
    const pinia = createPinia();

    plugins = [pinia];

    setActivePinia(pinia);
  });

  it('renders properties', async () => {
    const shoppingItem = new ShoppingItemClass({
      id: "SomeId",
      name: "Mustard",
      price: 3
    });

    const wrapper = await mount(ShoppingItem, {
      global: {
        plugins,
      },
      props: {
        shoppingItem
      }
    });

    expect((wrapper.find("#nameValue").element as HTMLInputElement).value).toBe("Mustard");
    expect((wrapper.find("#priceValue").element as HTMLInputElement).value).toBe("3");
  })
});