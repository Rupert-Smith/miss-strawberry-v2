import styles from './_results-card-long.module.scss';
import { useState } from 'react';
import { TypeRecipe } from 'common/types/common-types';
import { RecipeImage } from 'common/components/recipe-components/recipe-image';
import { Rating } from 'common/components/recipe-components/rating';
import { ActionButtons } from '../components/action-buttons';
import { ResultsCard } from '../components/results-card';
import { Price } from '../../../../../common/components/recipe-components/price';
import { Time } from 'common/components/recipe-components/time';
import { Title } from '../components/title';
import { RecipeInstructions } from '../components/recipe-instructions';
import { RootState } from 'store';
import { useSelector } from 'react-redux';

type ResultsCardLongTypes = {
  recipe: TypeRecipe;
};

function ResultsCardLong({ recipe }: ResultsCardLongTypes) {
  const [hoveredElement, setHoveredElement] = useState('');

  const cards = useSelector(
    (state: RootState) => state.commonApp.currentOpenFeatureCards
  );

  function handleClickCard() {}

  return (
    <ResultsCard
      setHoveredElement={setHoveredElement}
      hoveredElement={hoveredElement}
      propsClassName={`${styles['results-card-long']}`}
    >
      <div className={styles['column-one-picture-title']}>
        <RecipeImage
          flagSize="small"
          origin={recipe.overview.origin}
          alt={recipe.overview.title}
          src={recipe.overview.image}
          imageClassName={`${styles['recipe-picture-long']}`}
        />
        <div className={styles['title-time-block']}>
          <Title title={recipe.overview.title} />
          <Time time={recipe.overview.time} />
        </div>
      </div>
      {cards.includes('recipeView') ? (
        <Shrink recipe={recipe} setHoveredElement={setHoveredElement} />
      ) : (
        <Full recipe={recipe} setHoveredElement={setHoveredElement} />
      )}
    </ResultsCard>
  );
}

type FullShrinkTypes = {
  recipe: TypeRecipe;
  setHoveredElement: Function;
};

function Full({ recipe, setHoveredElement }: FullShrinkTypes) {
  return (
    <>
      <ActionButtons setHoveredElement={setHoveredElement} />
      <div className={styles['column-four-instructions']}>
        <RecipeInstructions steps={recipe.steps} />
      </div>
      <div className={styles['column-five-rating-and-price']}>
        <Rating rating={recipe.overview.rating} />
        <Price priceNumber={recipe.overview.price} />
      </div>
    </>
  );
}

function Shrink({ recipe, setHoveredElement }: FullShrinkTypes) {
  return (
    <>
      <div className={styles['column-five-rating-and-price']}>
        {/* <ActionButtons setHoveredElement={setHoveredElement} />
        <Rating rating={recipe.overview.rating} /> */}
      </div>
    </>
  );
}

export { ResultsCardLong };
