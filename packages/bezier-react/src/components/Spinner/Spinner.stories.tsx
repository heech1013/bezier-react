/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import Spinner from './Spinner'
import SpinnerProps, { SpinnerSize } from './Spinner.types'

export default {
  title: getTitle(base),
  component: Spinner,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: [
          SpinnerSize.XL,
          SpinnerSize.L,
          SpinnerSize.M,
          SpinnerSize.S,
          SpinnerSize.XS,
        ],
      },
    },
  },
} as Meta

const Template: Story<SpinnerProps> = ({ ...args }) => <Spinner {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: SpinnerSize.M,
}
