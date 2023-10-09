"use client";

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { QueryClient, QueryClientProvider } from 'react-query';



const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1, // Number of retries before failing a query
        staleTime: 60000, // Time in milliseconds before data is considered stale
      },
    },
  });
  

  return (
    <html lang="en">
      <body className={`${inter.className} text-white bg-black-100`}>
      <QueryClientProvider client={queryClient}>

        {children}
        </QueryClientProvider>

      </body>
    </html>
  )
}
