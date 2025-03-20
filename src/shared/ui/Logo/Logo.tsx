import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Logo.module.scss';
import CloudIcon from '@mui/icons-material/Cloud';
import { useTranslation } from 'react-i18next';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  const { t } = useTranslation();


  return <div className={classNames(cls.Logo, {}, [className])}>
    <CloudIcon/>
    {t('Прогноз погоды')}
  </div>;


};
