import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Item from './Item'
import styles from './styles.module.css'

describe('<Item />', () => {
  let wrapper;
  const place = {
    name: 'San Francisco'
  }
  beforeEach(() => {
    wrapper = shallow(<Item place={place} />)
  });

  it('contains a title component with yelp')
  it('wraps the component with an .item css class')
  it('contains a rating')
})
