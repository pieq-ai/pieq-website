import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock window.gtag for Google Analytics
Object.defineProperty(window, 'gtag', {
  value: vi.fn(),
  writable: true,
})

// Mock IntersectionObserver
globalThis.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Mock ResizeObserver
globalThis.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Mock scrollIntoView
Element.prototype.scrollIntoView = vi.fn()

// Mock hasPointerCapture
Element.prototype.hasPointerCapture = vi.fn()

// Mock window.scrollTo
globalThis.window.scrollTo = vi.fn()
