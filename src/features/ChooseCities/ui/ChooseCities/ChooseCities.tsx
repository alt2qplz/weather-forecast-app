import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ChooseCities.module.scss';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { cityActions, getCities } from 'entities/City';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';


interface ChooseCitiesProps {
  className?: string;
}

export const ChooseCities = memo((props: ChooseCitiesProps) => {
  const { className } = props;
  const { t } = useTranslation('cities');
  const cities = useSelector(getCities);
  const dispatch = useAppDispatch();

  const onChange = useCallback((name) => {
    const newCities = cities.map(city =>
      city.name === name ? { ...city, checked: !city.checked } : city
    );
    dispatch(cityActions.editCities(newCities));
  }, [dispatch, cities]);

  return (
    <div className={classNames(cls.ChooseCities, {}, [className])}>
      {cities.map(el => {
        return <Checkbox
          key={el.name}
          checked={el.checked}
          onChange={() => onChange(el.name)}
          label={t(el.name)}
        />;
      })}
    </div>
  );
});

ChooseCities.displayName = 'ChooseCities';
