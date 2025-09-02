import { type FC, useState } from 'react';

import { IconCheckCircle } from '@components/icons/shared/IconCheckCircle';

import { Scanner } from '@yudiel/react-qr-scanner';

export const ScannerPage: FC = () => {
  const [data, setData] = useState('');
  const [scanCount, setScanCount] = useState(0);

  const handleScan = (result: { rawValue: string }[]) => {
    console.log(result);
    if (result.length > 0) {
      setData(result[0].rawValue);
      setScanCount((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col relative z-10">
      {/* Header */}
      {/* <div className="flex justify-center pt-6 pb-4">
          <IconLogo className="h-12 w-20" />
        </div> */}

      {/* Title */}
      {/* <div className="text-center px-6 mb-6">
          <h1 className="text-3xl font-bold text-yellow1 font-helvetica">Контроль допуска</h1>
          <p className="text-white1 text-lg opacity-80">Сканирование QR-кодов гостей</p>
        </div> */}

      {/* Scanner Container */}
      <div className="px-4 pt-4">
        <div className="bg-transparent rounded-30 p-5 border-2 border-orange2 shadow-2xl">
          {/* Scanner Area */}
          <div className="relative mb-6">
            <div className="rounded-20 overflow-hidden border-4 border-yellow1 bg-black3 h-[18rem]">
              <Scanner
                onScan={handleScan}
                allowMultiple={true}
                scanDelay={1000}
                constraints={{
                  width: { ideal: 1280 },
                  height: { ideal: 720 },
                  facingMode: 'environment'
                }}
                components={{ finder: false }}
                styles={{
                  container: {
                    width: '100%',
                    height: '100%'
                  },
                  video: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }
                }}
              />
            </div>

            {/* Scan indicator overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 left-4 w-6 h-6 border-l-4 border-t-4 border-yellow1 rounded-tl-lg"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-r-4 border-t-4 border-yellow1 rounded-tr-lg"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-4 border-b-4 border-yellow1 rounded-bl-lg"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-4 border-b-4 border-yellow1 rounded-br-lg"></div>
            </div>
          </div>

          {/* Instructions */}
          {/* <div className="text-center mb-6">
              <p className="text-white1 text-lg font-caption">📱 Наведите QR-код на область сканирования</p>
              <p className="text-gray3 text-sm mt-2">Камера автоматически распознает QR-код</p>
            </div> */}

          {/* Scan Results */}
          <div className="bg-black3 rounded-20 p-4 border-2 border-gray2">
            <div className="flex items-center gap-3 mb-4">
              <IconCheckCircle className="w-6 h-6" />
              <h3 className="text-xl font-bold text-green1 font-helvetica">Данные гостя</h3>
            </div>

            {data ? (
              <div className="space-y-3">
                <div className="bg-gray2 rounded-20 p-4">
                  <p className="text-white1 font-mono text-sm break-all">{data}</p>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray3">Время сканирования:</span>
                  <span className="text-orange2">{new Date().toLocaleTimeString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray3">Количество сканирований:</span>
                  <span className="text-yellow1 font-bold">{scanCount}</span>
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="text-gray3 text-base mb-2">🔍 Ожидание сканирования...</div>
                <p className="text-gray3 text-sm">Результат появится здесь после сканирования QR-кода</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="px-4 mt-4">
        <div className="bg-black2 rounded-20 p-4 border-2 border-gray2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green1 rounded-full animate-pulse"></div>
            <span className="text-green1 text-sm font-caption">Сканер активен</span>
          </div>
          <div className="text-gray3 text-sm">Hawaii QR Scanner v1.0</div>
        </div>
      </div>
    </div>
  );
};
