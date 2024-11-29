import React from 'react';
import { CesiumViewer } from './components/CesiumViewer';
import { Sidebar } from './components/Sidebar';
import { Analytics } from './components/Analytics';
import { EmergencyPanel } from './components/EmergencyPanel';
import { useStore } from './store';

function App() {
  const activeTab = useStore((state) => state.activeTab);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col relative">
        <div className="flex-1">
          <CesiumViewer />
          {activeTab === 'emergency' && <EmergencyPanel />}
          {activeTab === 'analytics' && (
            <div className="absolute inset-0 bg-white bg-opacity-95">
              <Analytics />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;