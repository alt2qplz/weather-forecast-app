import { FC, Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, initAuthData } from 'entities/User';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';

export const App: FC = () => {
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  return (
    <div className={'app'}>
      <Suspense fallback={''}>
        <Header />
        <div className={'content-page'}>
          {inited ? <AppRouter /> : null}
        </div>
        <Footer/>
      </Suspense>
    </div>
  );
};
