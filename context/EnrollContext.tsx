'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface EnrollContextType {
  isEnrollModalOpen: boolean;
  openEnrollModal: (courseName?: string) => void;
  closeEnrollModal: () => void;
  enrollCourseName: string | null;
}

const EnrollContext = createContext<EnrollContextType | undefined>(undefined);

export function EnrollProvider({ children }: { children: ReactNode }) {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [enrollCourseName, setEnrollCourseName] = useState<string | null>(null);

  const openEnrollModal = (courseName?: string) => {
    setEnrollCourseName(courseName || null);
    setIsEnrollModalOpen(true);
  };

  const closeEnrollModal = () => {
    setIsEnrollModalOpen(false);
    setEnrollCourseName(null);
  };

  return (
    <EnrollContext.Provider
      value={{
        isEnrollModalOpen,
        openEnrollModal,
        closeEnrollModal,
        enrollCourseName,
      }}
    >
      {children}
    </EnrollContext.Provider>
  );
}

export function useEnroll() {
  const context = useContext(EnrollContext);
  if (context === undefined) {
    throw new Error('useEnroll must be used within an EnrollProvider');
  }
  return context;
}