import Vue from 'vue';
import 'jest-canvas-mock';
import fetch from 'jest-fetch-mock';

Vue.config.productionTip = false;
global.fetch = fetch;
