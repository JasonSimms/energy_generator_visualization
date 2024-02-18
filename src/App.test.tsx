// Path: src/App.test.tsx
import App from './App'
import { render, screen, userEvent } from './utils/test-utils';
import { describe, it, expect } from 'vitest';

describe('Simple working test', () => {
  it.skip('the title is visible', () => {
    render(<App />)
    expect(screen.getByText(/logos to learn/i)).toBeInTheDocument()
  })

  it.skip('should increment count on click', async () => {
    render(<App />)
    userEvent.click(screen.getByRole('button'))
    expect(await screen.findByText(/count is 1/i)).toBeInTheDocument()
  })

  it.skip('uses flexbox in app header', async () => {
    render(<App />)
    const element = screen.getByRole('body')
    expect(element.className).toEqual('App-header')
    expect(getComputedStyle(element).display).toEqual('flex')
  })
})