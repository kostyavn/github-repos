import { Pagination } from '@shared/elements/ui'

export default {
  title: 'UI/Pagination',
  component: Pagination,
  args: {
    current: 1,
    limit: 5,
    totalPages: 10,
    // eslint-disable-next-line no-console
    onChange: (page: number) => console.info(`Changed to page: ${page}`)
  },
  argTypes: {
    current: {
      control: {
        type: 'number'
      }
    },
    limit: {
      control: {
        type: 'number'
      }
    },
    totalPages: {
      control: {
        type: 'number'
      }
    }
  },
  tags: ['autodocs']
}

export const DefaultPagination = {
  args: {
    current: 1,
    limit: 5,
    totalPages: 10
  }
}

export const PaginationWithDifferentProps = {
  args: {
    current: 5,
    limit: 3,
    totalPages: 10
  }
}
