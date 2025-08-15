"use client"
import React from 'react'
import { ProgressProvider } from '@bprogress/next/app';
import { Toaster } from '@/components/ui/sonner';


const Providers = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
        <ProgressProvider
          height="3px"
          color="#245B99"
          options={{ showSpinner: false }}
          shallowRouting
        >
          {children}
          <Toaster />
        </ProgressProvider>
    </div>
  )
}

export default Providers