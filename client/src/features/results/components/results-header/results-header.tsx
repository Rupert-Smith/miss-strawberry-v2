import { ReactNode } from 'react';
import styles from './_results-header.module.scss';
import { ReactComponent as MagnifyingGlass } from 'assets/icons/magnifying-glass-light.svg';
import { ReactComponent as FavouritesIcon } from 'assets/icons/heart-light.svg';
import { ReactComponent as BreakfastIcon } from 'assets/icons/egg-fried-light.svg';
import { ReactComponent as DessertsIcon } from 'assets/icons/cupcake-light.svg';
import { ReactComponent as DrinkIcon } from 'assets/icons/martini-glass-citrus-light.svg';
import { ReactComponent as LightMealsIcon } from 'assets/icons/bowl-rice-light.svg';
import { ReactComponent as MainsIcon } from 'assets/icons/bowl-chopsticks-noodles-light.svg';
import { ReactComponent as Snacks } from 'assets/icons/chopsticks-light.svg';
import { ReactComponent as Tricks } from 'assets/icons/hat-chef-light.svg';
import { ReactComponent as ListIcon } from 'assets/icons/list-solid.svg';
import { ReactComponent as BlockIcon } from 'assets/icons/image-solid.svg';
import { convertToPlural } from 'common/helpers/convert-to-plural';
import { GeneralHeading } from 'common/components/general-heading';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

type RecipeHeaderTypes = {
  results: Object[];
  selectedLayout: string;
  setSelectedLayout: Function;
  resultsReturned: boolean;
};

function RecipeHeader({
  results,
  selectedLayout,
  resultsReturned,
  setSelectedLayout,
}: RecipeHeaderTypes) {
  const resultLayouts: { layoutId: string; icon: ReactNode }[] = [
    { layoutId: 'list', icon: <ListIcon /> },
    { layoutId: 'block', icon: <BlockIcon /> },
  ];

  const cards = useSelector(
    (state: RootState) => state.cards.currentOpenFeatureCards
  );

  const headerId = useSelector(
    (state: RootState) => state.results.resultsHeaderId
  );

  let headerConfig = { heading: '', icon: <></> };

  switch (headerId) {
    case 'search': {
      headerConfig = { heading: 'search results', icon: <MagnifyingGlass /> };
      break;
    }
    case 'favourites': {
      headerConfig = { heading: 'favourites', icon: <FavouritesIcon /> };
      break;
    }
    case 'breakfast': {
      headerConfig = { heading: 'breakfast', icon: <BreakfastIcon /> };
      break;
    }
    case 'desserts': {
      headerConfig = { heading: 'desserts', icon: <DessertsIcon /> };
      break;
    }
    case 'drinks': {
      headerConfig = { heading: 'drinks', icon: <DrinkIcon /> };
      break;
    }
    case 'lightMeals': {
      headerConfig = { heading: 'light meals', icon: <LightMealsIcon /> };
      break;
    }
    case 'mains': {
      headerConfig = { heading: 'mains', icon: <MainsIcon /> };
      break;
    }
    case 'snacks': {
      headerConfig = { heading: 'snacks', icon: <Snacks /> };
      break;
    }
    case 'tricks': {
      headerConfig = { heading: 'tricks', icon: <Tricks /> };
      break;
    }
  }

  const handleSelectIcon = (layoutId: string) => {
    setSelectedLayout(layoutId);
  };

  const showLayoutButtons = !cards.includes('recipeView') && resultsReturned;

  return (
    <div className={styles['results-header']}>
      <GeneralHeading
        black
        heading={headerConfig.heading}
        icon={headerConfig.icon}
      />
      <div className={styles['results-bar']}>
        {showLayoutButtons && (
          <div className={styles['layer-buttons-container']}>
            {resultLayouts.map((layout) => {
              return (
                <div
                  onClick={() => {
                    handleSelectIcon(layout.layoutId);
                  }}
                  className={`${styles['layer-button']} ${
                    selectedLayout === layout.layoutId
                      ? styles['layer-button-selected']
                      : styles['layer-button-not-selected']
                  }`}
                  key={layout.layoutId}
                >
                  {layout.icon}
                </div>
              );
            })}
          </div>
        )}

        <div className={styles['result-total']}>{`${
          results.length
        } ${convertToPlural('result', results.length)}`}</div>
      </div>
    </div>
  );
}

export { RecipeHeader };
