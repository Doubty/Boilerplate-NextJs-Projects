import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main/>', () => {
  it('it shoudl render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /BoilerPlate do Galvs/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('it should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
