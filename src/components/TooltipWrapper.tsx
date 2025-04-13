
import React, { PropsWithChildren } from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';

export const TooltipWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <TooltipProvider>
      {children}
    </TooltipProvider>
  );
};
