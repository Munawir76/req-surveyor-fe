import nProgress from 'nprogress';
import { useEffect } from 'react';
import { useFetchers, useNavigation } from 'react-router-dom';

function useProgressBar() {
  const navigation = useNavigation();
  const fetchers = useFetchers();
  const fetchersIdle = fetchers.every(f => f.state === 'idle');

  nProgress.configure({ showSpinner: false });

  useEffect(() => {
    nProgress.start();
    if (navigation.state === 'idle' && fetchersIdle) {
      nProgress.done();
    }
    return () => {
      nProgress.remove();
    };
  }, [navigation.state, fetchers]);
}

export default useProgressBar;
