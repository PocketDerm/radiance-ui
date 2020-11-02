import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { decorateWithThemeProvider } from 'src/tests/decorateWithThemeProvider';

import { MessageItem } from '../verificationMessages/style';

import { Field } from './index';

describe('<Field />', () => {
  const DecoratedField = decorateWithThemeProvider(Field);

  describe('UI Snapshot', () => {
    it('renders with default props', () => {
      const component = renderer.create(
        <DecoratedField>
          <Field.Input />
        </DecoratedField>,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders with label and labelFor props', () => {
      const labelText = 'Test Label';
      const labelFor = 'for-input-id';
      const component = renderer.create(
        <DecoratedField label={labelText} labelFor={labelFor}>
          <Field.Input />
        </DecoratedField>,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders with errorMessage, hintMessage and hideMessagesIcon props', () => {
      const errorMessage = (
        <React.Fragment>
          <strong>Uh Oh!</strong> Type again
        </React.Fragment>
      );
      const component = renderer.create(
        <DecoratedField
          hideMessagesIcon
          hintMessage="hint message"
          messages={{ error: errorMessage }}
        >
          <Field.Input />
        </DecoratedField>,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when provided some messages', () => {
    it('renders the error message', () => {
      const messages = { maxLength: 'Maximum 6 characteres' };
      const wrapper = mount(
        <DecoratedField messages={messages} messagesType="error">
          <Field.Input />
        </DecoratedField>,
      );

      const li = wrapper.find(MessageItem);

      expect(li).toHaveLength(1);
      expect(li.text()).toEqual(messages.maxLength);
    });

    it('renders the success messages', () => {
      const messages = { success: 'Thanks for completing' };
      const wrapper = mount(
        <DecoratedField messages={messages} messagesType="success">
          <Field.Input />
        </DecoratedField>,
      );

      const li = wrapper.find(MessageItem);

      expect(li).toHaveLength(1);
      expect(li.text()).toEqual(messages.success);
    });
  });
});
