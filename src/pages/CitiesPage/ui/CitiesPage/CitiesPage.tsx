import { useTranslation } from 'react-i18next';
import cls from './CitiesPage.module.scss';
import { memo } from 'react';
import { Page } from 'widgets/Page';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { HStack } from 'shared/ui/Stack';
import { ChooseCities } from 'features/ChooseCities';

const CitiesPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page>
      <HStack className={cls.wrap} justify={'end'}>
        <AppLink to={'/'}>{t('Вернуться к погоде')}</AppLink>
      </HStack>
      <ChooseCities />
    </Page>
  );
});

CitiesPage.displayName = 'CitiesPage';

export default CitiesPage;