import { ComboboxField } from '@fluentui/react-components/unstable';

import descriptionMd from './ComboboxFieldDescription.md';

export { Default } from './ComboboxFieldDefault.stories';

export default {
  title: 'Preview Components/Field/ComboboxField',
  component: ComboboxField,
  parameters: {
    docs: {
      description: {
        component: descriptionMd,
      },
    },
  },
};
