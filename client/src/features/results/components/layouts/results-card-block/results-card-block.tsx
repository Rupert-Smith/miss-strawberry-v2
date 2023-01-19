import { useState } from 'react';
import styles from './_results-card-block.module.scss';
import { TypeRecipe } from 'common/types/common-types';
import { RecipeImage } from 'common/components/recipe-components/recipe-image';
import { ActionButtons } from '../components/action-buttons';
import { ResultsCard } from '../components/results-card';
import { Title } from '../components/title';

type ResultsCardBlockTypes = {
  recipe: TypeRecipe;
};

function ResultsCardBlock({ recipe }: ResultsCardBlockTypes) {
  const [hoveredElement, setHoveredElement] = useState('');

  return (
    <ResultsCard
      setHoveredElement={setHoveredElement}
      hoveredElement={hoveredElement}
      propsClassName={`${styles['results-card-block']}`}
    >
      <div className={styles['row-one-picture']}>
        <RecipeImage
          flagSize="medium"
          origin={recipe.overview.origin}
          alt={recipe.overview.title}
          src={recipe.overview.image}
          imageClassName={`${styles['recipe-picture-block']}`}
        />
      </div>
      <div className={styles['row-two-title']}>
        <Title title={recipe.overview.title} />
      </div>
      <div className={`${styles['row-three-action-buttons']}`}>
        <ActionButtons setHoveredElement={setHoveredElement} />
      </div>
    </ResultsCard>
  );
}

export { ResultsCardBlock };
