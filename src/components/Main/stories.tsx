import Main from '.'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Default title',
    description: 'Default description'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Basic title',
  description: 'Basic description'
}

export const Default: Story = (args) => <Main {...args} />
