import { type FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ScannerPage } from '@pages/ScannerPage';
import { Settings } from '@pages/Settings';

import { IconScan } from '@components/icons/navigation/IconScan';
import { IconSettings } from '@components/icons/navigation/IconSettings';
import { PalmsBackground } from '@components/layout/PalmsBackground';
import { LinkRounded } from '@components/navigation/LinkRounded';

const App: FC = () => {
  return (
    <PalmsBackground>
      <div className="font-caption h-full w-full">
        <ToastContainer
          toastClassName="!font-helvetica"
          position="bottom-left"
          autoClose={1000 * 20}
          closeButton={false}
          icon={false}
          closeOnClick
        />

        <div className="pb-16 min-h-full w-full">
          <Routes>
            <Route path="/" element={<ScannerPage />} />
            <Route path="/settings" element={<Settings />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <div className="fixed z-30 bottom-0 py-1 h-16 w-full flex items-center justify-center gap-4">
          <LinkRounded to="/">
            <IconScan className="w-10 h-10 stroke-inherit fill-none" />
          </LinkRounded>
          <LinkRounded to="/settings">
            <IconSettings className="w-9 h-9 fill-inherit stroke-none" />
          </LinkRounded>
        </div>
      </div>
    </PalmsBackground>
  );
};

export default App;
