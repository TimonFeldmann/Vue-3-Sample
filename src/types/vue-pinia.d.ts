// types/vue-pinia.d.ts

/* eslint-disable */

import utils from "@vue/test-utils";
import { Pinia } from "pinia";

declare module "@vue/test-utils" {
  interface MountOptions {
    pinia?: Pinia;
  }
}