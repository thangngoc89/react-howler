import React from 'react'
import { expect } from 'chai'
import { createRenderer } from 'react-addons-test-utils';
import sinon from 'sinon'
import Audio from '../src/ReactHowler'

// var spy = sinon.spy()
//
// Audio.__Rewire__('Howler', () => {
//   play: spy
// })

describe('ReactHowler component', () => {

  it('should render as blank div tag', () => {
    const renderer = createRenderer()
    renderer.render(<Audio />);
    const actualElement = renderer.getRenderOutput();
    const expectedElement = <div />
    console.log(actualElement)
    console.log(expectedElement)

    expect(actualElement).to.equal(expectedElement);
  });
})
