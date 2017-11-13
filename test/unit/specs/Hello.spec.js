import Vue from 'vue';
import loginInputGroup from '@/components/loginInputGroup/loginInputGroup.vue';

describe('loginInputGroup.vue', () => {
  it('should render correct contents', () => {
    expect(typeof loginInputGroup.data).toBe('function')
      .to.equal('Welcome to Your Vue.js App');
  });
});
