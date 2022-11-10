import * as React from 'react';
import type { SelectFieldProps } from '@fluentui/react-components/unstable';
import { SelectField } from '@fluentui/react-components/unstable';

export const Default = (props: Partial<SelectFieldProps>) => (
  <SelectField
    label="Example select field"
    validationState="success"
    validationMessage="This is a success message"
    hint="This is a hint message"
    {...props}
  >
    <option value="one">Option one</option>
    <option value="two">Option two</option>
    <option value="three">Option three</option>
  </SelectField>
);
