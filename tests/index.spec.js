import { expect } from 'chai'
import { Howler } from 'howler/src/howler.core.js'
import ReactHowler from '../src/ReactHowler'
import library from '../src/index'

console.log(library)

describe('Export packages', () => {
  it('should export ReactHowler component', () => {
    expect(library).to.deep.equal(ReactHowler)
  })

  it('Should export global howler control', () => {
    expect(library.Howler).to.deep.equal(Howler)
  })
})
