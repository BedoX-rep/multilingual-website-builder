
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full text-center p-8">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
          <p className="text-gray-500 mt-2 mb-8">Sorry, we couldn't find the page you're looking for.</p>
          <Button asChild>
            <Link to="/">Go Back Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
