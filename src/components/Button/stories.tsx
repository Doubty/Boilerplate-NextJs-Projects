import Button from '.'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    title: 'Default title',
    description: 'Default description'
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />
