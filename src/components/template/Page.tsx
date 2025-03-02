import Footer from '../Footer';
import Header from '../Header';
import Loader from '../../components/Loader';
import { useState, useEffect } from 'react';

export interface PageProps {
  children: React.ReactNode;
  className?: string;
}

export default function Page({ children, className }: PageProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <div className="flex justify-center items-center h-screen">
      <Loader />
    </div>
  ) : (
    <div className="flex flex-col min-h-screen bg-zinc-600">
      <Header />
      <main
        className={`w-full max-w-screen-2xl mx-auto flex-1 py-10 px-4 ${
          className ?? ''
        }`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
