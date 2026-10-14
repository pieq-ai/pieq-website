import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock window.gtag for Google Analytics
Object.defineProperty(window, 'gtag', {
  value: vi.fn(),
  writable: true,
})

// Mock IntersectionObserver
globalThis.IntersectionObserver = vi.fn(class IntersectionObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  takeRecords = vi.fn(() => [])
}) as unknown as typeof IntersectionObserver

// Mock ResizeObserver
globalThis.ResizeObserver = vi.fn(class ResizeObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}) as unknown as typeof ResizeObserver

// Mock scrollIntoView
Element.prototype.scrollIntoView = vi.fn()

// Mock hasPointerCapture
Element.prototype.hasPointerCapture = vi.fn()

// Mock window.scrollTo
globalThis.window.scrollTo = vi.fn()
