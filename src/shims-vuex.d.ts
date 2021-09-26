import { Store } from '@/store';
import { Api } from '@/services';
import { ComponentCustomProperties } from 'vue';
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store;
    $http: Api;
  }
}
