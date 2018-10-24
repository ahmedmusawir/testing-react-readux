import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>,
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('The textarea', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'New Test Comment' },
    });
    wrapped.update();
  });

  it('has a textarea user can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('New Test Comment');
  });

  it('when form is submitted, text area gets emptied', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('New Test Comment');

    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
