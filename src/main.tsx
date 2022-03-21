import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './app';
import Home from './routes/index';

const router = <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='*' element={<h1>Not found</h1>} />
    </Route>
  </Routes>
</BrowserRouter>

render(
  router,
  document.querySelector('#app'),
)
