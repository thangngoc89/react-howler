import { expect } from 'chai'
import { Howler } from 'howler/src/howler.core.js'
import ReactHowler from '../src/ReactHowler'
import ReactHowlerLibrary, { Howler as HowerLibrary } from '../src/index'

describe('Export packages', () => {
  it('should export ReactHowler component', () => {
    expect(ReactHowlerLibrary).to.deep.equal(ReactHowler)
  })

  it('Should export global howler control', () => {
    expect(HowerLibrary).to.deep.equal(Howler)
  })
})
