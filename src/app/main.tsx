import { RouterProvider } from '@tanstack/react-router'
import ReactDOM from 'react-dom/client'

import '@shared/css/index.css'

import { router } from './application-routes'

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
