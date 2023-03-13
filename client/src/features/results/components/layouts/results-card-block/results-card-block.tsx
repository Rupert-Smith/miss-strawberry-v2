import { useEffect, useState } from 'react';
import styles from './_results-card-block.module.scss';
import { TypeRecipe } from 'common/types/common-types';
import { RecipeImage } from 'common/components/recipe-components/recipe-image';
import { ActionButtonsBlock } from '../../../../../common/components/buttons/action-buttons-block';
import { ResultsCard } from '../components/results-card';
import { useRef } from 'react';
import { Title } from '../components/title';

type ResultsCardBlockTypes = {
  recipe: TypeRecipe;
};

function ResultsCardBlock({ recipe }: ResultsCardBlockTypes) {
  const [hoveredElement, setHoveredElement] = useState('');

  const actionButtonsRef = useRef();

  return (
    <ResultsCard
      actionButtonRef={actionButtonsRef}
      setHoveredElement={setHoveredElement}
      hoveredElement={hoveredElement}
      propsClassName={`${styles['results-card-block']}`}
      recipe={recipe}
    >
      <div className={styles['row-one-picture']}>
        <RecipeImage
          flagSize="medium"
          country={recipe.overview.country}
          alt={recipe.overview.title}
          src={recipe.overview.image}
          imageClassName={`${styles['recipe-picture-block']}`}
        />
      </div>
      <div className={styles['row-two-title']}>
        <Title title={recipe.overview.title} />
      </div>
      <div className={`${styles['row-three-action-buttons']}`}>
        <ActionButtonsBlock
          propsRef={actionButtonsRef}
          recipeId={recipe._id}
          favourite={recipe.meta?.favourite}
          setHoveredElement={setHoveredElement}
        />
      </div>
    </ResultsCard>
  );
}

export { ResultsCardBlock };
