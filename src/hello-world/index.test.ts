import { hello } from './index';

describe('Hello World', () => {
  it('says hello world', () => {
    expect(hello()).toEqual('Hello, World!');
  });
});
