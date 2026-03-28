import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Fortune } from './pages/Fortune'
import { Home } from './pages/Home'
import { Learn } from './pages/Learn'
import { MzTest } from './pages/MzTest'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="learn" element={<Learn />} />
          <Route path="mz" element={<MzTest />} />
          <Route path="fortune" element={<Fortune />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
