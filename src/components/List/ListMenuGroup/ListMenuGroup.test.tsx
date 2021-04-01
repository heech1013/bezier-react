/* External dependencies */
import React from 'react'
import { v4 as uuid } from 'uuid'
import { range } from 'lodash-es'

/* Internal dependencies */
import { render } from '../../../utils/testUtils'
import { ListItem } from '../ListItem'
import ListMenuGroup, { LIST_MENU_GROUP_TEST_ID } from './ListMenuGroup'
import ListMenuGroupProps from './ListMenuGroup.types'

describe('ListMenuGroup', () => {
  let props: ListMenuGroupProps

  beforeEach(() => {
    props = {
      open: true,
      selectedOptionIndex: 0,
      content: 'campaigns',
    }
  })

  const renderComponent = (optionProps?: Partial<ListMenuGroupProps>) => render(
    <ListMenuGroup {...props} {...optionProps}>
      { range(0, 4).map(n => (
        <ListItem
          key={uuid()}
          optionKey={`menu-item-${n}`}
          content={`item ${n}`}
        />
      )) }
    </ListMenuGroup>,
  )

  it('should have default styles', () => {
    const { getByTestId } = renderComponent()
    const rendered = getByTestId(LIST_MENU_GROUP_TEST_ID)

    expect(rendered).toHaveStyle('display: flex;')
    expect(rendered).toHaveStyle('align-items: center;')
    expect(rendered).toHaveStyle('height: 32px;')
  })

  it(
    'should have index on "data-active-index" attr when "selectedOptionIndex" given',
    () => {
      const { getByTestId } = renderComponent({ selectedMenuItemIndex: 2 })
      const rendered = getByTestId(LIST_MENU_GROUP_TEST_ID)

      expect(rendered).toHaveAttribute('data-active-index', '2')
    })
})