import { type FC } from 'react';
import { Link } from 'react-router';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ScannerPage } from '@pages/ScannerPage';
import { Settings } from '@pages/Settings';

const App: FC = () => {
  return (
    <div>
      <div className="font-caption bg-black h-full w-full">
        <ToastContainer
          toastClassName="!font-helvetica"
          position="bottom-left"
          autoClose={1000 * 20}
          closeButton={false}
          icon={false}
          closeOnClick
        />

        <div className="fixed bottom-0 bg-green-600 h-16 w-full">
          <Link to="/" className=" right-[45%] top-[45%]">
            Сканер
          </Link>

          <Link to="/settings" className=" top-5 left-5">
            Настройки
          </Link>
        </div>

        <div className="bg-red-300 pb-16 h-screen w-full">
          <Routes>
            <Route path="/" element={<ScannerPage />} />
            <Route path="/settings" element={<Settings />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>{' '}
        </div>
      </div>
    </div>
  );
};

export default App;
