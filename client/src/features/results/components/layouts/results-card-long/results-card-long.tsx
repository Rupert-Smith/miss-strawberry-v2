import styles from './_results-card-long.module.scss';
import { useState } from 'react';
import { TypeRecipe } from 'common/types/common-types';
import { RecipeImage } from 'common/components/recipe-components/recipe-image';
import { ActionButtonsBlock } from '../../../../../common/components/buttons/action-buttons-block';
import { ResultsCard } from '../components/results-card';
import { Price } from '../../../../../common/components/recipe-components/price';
import { Time } from 'common/components/recipe-components/time';
import { Title } from '../components/title';
import { RecipeInstructions } from '../components/recipe-instructions';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import { InputRating } from 'common/components/inputs/input-rating';
import { useRef } from 'react';
import useWindowConfigActions from 'common/components/window/hooks/use-window-config-actions';

type ResultsCardLongTypes = {
  recipe: TypeRecipe;
};

function ResultsCardLong({ recipe }: ResultsCardLongTypes) {
  const [hoveredElement, setHoveredElement] = useState('');

  const cards = useSelector(
    (state: RootState) => state.cards.currentOpenFeatureCards
  );
  const { openWindow } = useWindowConfigActions();

  const actionButtonsRef = useRef();

  function handleClickCard() {}

  return (
    <ResultsCard
      actionButtonRef={actionButtonsRef}
      recipe={recipe}
      setHoveredElement={setHoveredElement}
      hoveredElement={hoveredElement}
      propsClassName={`${styles['results-card-long']}`}
    >
      <div className={styles['column-one-picture-title']}>
        <RecipeImage
          flagSize="small"
          country={recipe.overview.country}
          alt={recipe.overview.title}
          src={recipe.overview.image}
          imageClassName={`${styles['recipe-picture-long']}`}
        />
        <div className={styles['title-time-block']}>
          <Title title={recipe.overview.title} />
          <Time time={recipe.overview.cookingTime} />
        </div>
      </div>
      {cards.includes('recipeView') ? (
        <Shrink recipe={recipe} setHoveredElement={setHoveredElement} />
      ) : (
        <Full
          actionButtonsRef={actionButtonsRef}
          recipe={recipe}
          setHoveredElement={setHoveredElement}
        />
      )}
    </ResultsCard>
  );
}

type FullTypes = {
  recipe: TypeRecipe;
  setHoveredElement: Function;
  actionButtonsRef: any;
};

function Full({ actionButtonsRef, recipe, setHoveredElement }: FullTypes) {
  return (
    <>
      <ActionButtonsBlock
        propsRef={actionButtonsRef}
        recipeId={recipe._id}
        favourite={recipe.meta?.favourite}
        setHoveredElement={setHoveredElement}
      />
      <div className={styles['column-four-instructions']}>
        <RecipeInstructions steps={recipe.steps} />
      </div>
      <div className={styles['column-five-rating-and-price']}>
        <InputRating read propsInitialValue={recipe.overview.rating} />
        <Price priceNumber={recipe.overview.price} />
      </div>
    </>
  );
}

type ShrinkTypes = {
  recipe: TypeRecipe;
  setHoveredElement: Function;
};

function Shrink({ recipe, setHoveredElement }: ShrinkTypes) {
  return (
    <>
      <div className={styles['column-five-rating-and-price']}>
        {/* <ActionButtonsBlock
          recipeId={recipe._id}
          favourite={recipe.meta?.favourite}
          setHoveredElement={setHoveredElement}
        /> */}
        <InputRating read propsInitialValue={recipe.overview.rating} />
      </div>
    </>
  );
}

export { ResultsCardLong };
