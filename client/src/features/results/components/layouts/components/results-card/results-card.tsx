import styles from './_results-card.module.scss';
import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { cardsActions } from 'common/store/cards-slice';
import { TypeRecipe } from 'common/types/common-types';
import { recipeActions } from 'common/store/recipes-slice';
import useClickOutsideClose from 'common/hooks/use-click-outside-close';

type ResultsCardTypes = {
  children?: ReactNode;
  setHoveredElement: Function;
  hoveredElement: string;
  propsClassName?: string;
  recipe: TypeRecipe;
  actionButtonRef: any;
};

function ResultsCard({
  children,
  setHoveredElement,
  hoveredElement,
  propsClassName,
  recipe,
  actionButtonRef,
}: ResultsCardTypes) {
  const dispatch = useDispatch();

  // const { open, setOpen } = useClickOutsideClose(handleClickOutside);

  // function handleClickOutside(event: any) {
  //   ref.forEach((ref: any) => {
  //     if (!ref.current?.contains(event.target)) {
  //       setOpen(false);
  //     }
  //   });
  // }

  function handleClickCard(event: any) {
    console.log(actionButtonRef);
    console.log(event.target);
    // if (!actionButtonRef.current?.contains(event.target)) {
    //   console.log('open recipe');
    // } else {
    //   console.log('do not open recipe');
    // }
    if (!actionButtonRef.current?.contains(event.target)) {
      dispatch(
        cardsActions.setCurrentOpenFeatureCards({
          cardAction: 'add',
          cardId: 'recipeView',
        })
      );
      dispatch(recipeActions.setCurrentSelectedRecipe(recipe));
    }
  }

  return (
    <div
      onClick={handleClickCard}
      onMouseEnter={() => {
        setHoveredElement('card');
      }}
      onMouseLeave={() => {
        setHoveredElement('');
      }}
      className={`${propsClassName} ${styles['results-card']}
     ${
       hoveredElement === 'card'
         ? styles['results-card-hover']
         : styles['results-card-no-hover']
     }
    `}
    >
      {children}
    </div>
  );
}

export { ResultsCard };
