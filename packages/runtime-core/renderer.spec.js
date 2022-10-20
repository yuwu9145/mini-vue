import { render } from './renderer'
describe('renderer: element', () => {
  let root

  beforeEach(() => {
    root = document.createElement('div')
  })

  it('should create an element', () => {
    render({
      type: 'div'
    }, root)
    expect(root.innerHTML).toBe('<div></div>')
  })

  // it('should create an element with props', () => {
  //   render(h('div', { id: 'foo', class: 'bar' }), root)
  //   expect(inner(root)).toBe('<div id="foo" class="bar"></div>')
  // })

  // it('should create an element with direct text children', () => {
  //   render(h('div', ['foo', ' ', 'bar']), root)
  //   expect(inner(root)).toBe('<div>foo bar</div>')
  // })

  // it('should create an element with direct text children and props', () => {
  //   render(h('div', { id: 'foo' }, ['bar']), root)
  //   expect(inner(root)).toBe('<div id="foo">bar</div>')
  // })

  // it('should update an element tag which is already mounted', () => {
  //   render(h('div', ['foo']), root)
  //   expect(inner(root)).toBe('<div>foo</div>')

  //   render(h('span', ['foo']), root)
  //   expect(inner(root)).toBe('<span>foo</span>')
  // })

  // it('should update element props which is already mounted', () => {
  //   render(h('div', { id: 'bar' }, ['foo']), root)
  //   expect(inner(root)).toBe('<div id="bar">foo</div>')

  //   render(h('div', { id: 'baz', class: 'bar' }, ['foo']), root)
  //   expect(inner(root)).toBe('<div id="baz" class="bar">foo</div>')
  // })
})
