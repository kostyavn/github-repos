/* eslint-disable import/no-named-as-default */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { render as reactRender, act as reactAct, screen } from '@testing-library/react'
import userEvent, { type Options } from '@testing-library/user-event'
import { type FC } from 'react'

export function setup<T extends JSX.IntrinsicAttributes & Record<string, any>>(
  Component: FC<T>,
  props: T,
  userEventOptions?: Options
) {
  const getRenderResult = () => {
    const renderResult = reactRender(<Component {...props} />)
    return {
      ...renderResult,
      rerender: (withProps: T) => renderResult.rerender(<Component {...props} {...withProps} />)
    }
  }

  const renderResult = getRenderResult()
  const { container, rerender, unmount } = renderResult

  const getElement = (element: HTMLElement) => {
    return element
  }

  const user = userEvent.setup(userEventOptions)

  return {
    ...screen,
    ...renderResult,
    reset(withProps?: Partial<T>) {
      const resetProps = { ...props, ...withProps }

      for (const key in resetProps) {
        const prop = resetProps[key]
        const isMockedFunctionProp = vi.isMockFunction(prop)

        if (isMockedFunctionProp) {
          prop.mockClear()
        }
      }

      unmount()
      rerender(resetProps)
    },
    setProps(withProps: Partial<T>) {
      const mergedProps = { ...props, ...withProps }
      rerender(mergedProps)
    },
    expect(target: any) {
      const isTargetMock = vi.isMockFunction(target)
      const isTargetFunction = typeof target === 'function'
      const isTargetElement = !isTargetMock && isTargetFunction

      const actual = isTargetElement ? target(container) : target

      return expect(actual)
    },
    timeout(cb: () => void, time?: number) {
      reactAct(() => {
        if (time) {
          setTimeout(cb, time)
          vi.runOnlyPendingTimers()
        } else {
          cb()
        }
      })
    },
    async click(element: HTMLElement) {
      await user.click(getElement(element))
    },
    async dblClick(element: HTMLElement) {
      await user.dblClick(getElement(element))
    },
    async type(element: HTMLElement, text: string) {
      await user.type(getElement(element), text)
    },
    async clear(element: HTMLElement) {
      await user.clear(getElement(element))
    },
    async tab() {
      await user.tab()
    },
    async hover(element: HTMLElement) {
      await user.hover(getElement(element))
    },
    async unhover(element: HTMLElement) {
      await user.unhover(getElement(element))
    },
    async upload(element: HTMLElement, fileOrFiles: File | File[]) {
      await user.upload(getElement(element), fileOrFiles)
    },
    async paste(text: string) {
      await user.paste(text)
    },
    async keyboard(...args: Parameters<typeof user.keyboard>) {
      await user.keyboard(...args)
    }
  }
}
