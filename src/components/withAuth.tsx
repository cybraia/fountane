import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/components/client';

export default function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const router = useRouter();

    useEffect(() => {
      const session = supabase.auth.session();

      if (!session) {
        // Redirect to the login page if the user is not authenticated
        router.push('/login');
      }
    }, []);

    if (!supabase.auth.session()) {
      // Return an empty component or loading indicator if authentication is pending
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}
