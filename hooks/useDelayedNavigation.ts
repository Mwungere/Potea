import { useEffect } from 'react';
import { useRouter } from 'expo-router';

const useDelayedNavigation = (route: string, time: number) => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(route as any);
    }, time);

    return () => clearTimeout(timer);
  }, [route, time, router]);
};

export default useDelayedNavigation;
