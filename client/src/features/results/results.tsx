import styles from './_results.module.scss';
import { ResultsCardLong } from './components/layouts/results-card-long';
import { ResultsCardBlock } from './components/layouts/results-card-block';
import { TypeRecipe } from 'common/types/common-types';
import { useEffect, useRef, useState } from 'react';
import { RecipeHeader } from './components/results-header';
import useWindowResize from 'common/hooks/use-window-resize';
import { CloseButton } from 'common/components/buttons/close-button';
import { useDispatch } from 'react-redux';
import { cardsActions } from 'common/store/cards-slice';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { ReactComponent as FaceThink } from 'assets/icons/face-thinking-thin.svg';

function Results() {
  const windowHeight = useWindowResize()[1];

  const results: TypeRecipe[] = useSelector(
    (state: RootState) => state.results.currentResults
  );

  console.log(results);

  const resultsReturned = results.length > 0;

  const [selectedLayout, setSelectedLayout] = useState('list');
  const [resultsWidthClass, setResultsWidthClass] =
    useState('results-long-full');

  const resultsMasterContainer = useRef(document.createElement('div'));

  const [resultsMasterContainerHeight, setResultsMasterContainerHeight] =
    useState(resultsMasterContainer.current.offsetHeight);

  useEffect(() => {
    setResultsMasterContainerHeight(
      resultsMasterContainer.current.offsetHeight
    );
  }, [windowHeight]);

  const listHeight = `${resultsMasterContainerHeight - 115}px`;

  const dispatch = useDispatch();

  const cards = useSelector(
    (state: RootState) => state.cards.currentOpenFeatureCards
  );

  useEffect(() => {
    if (cards.includes('recipeView')) {
      setSelectedLayout('list');
      setResultsWidthClass('results-long-shrink');
    } else {
      setResultsWidthClass('results-long-full');
    }
  }, [cards]);

  return (
    <div
      // style={{ maxHeight: '100vh' }}

      className={`${styles['master-window']} ${
        resultsReturned
          ? styles['master-window-results']
          : styles['master-window-no-results']
      }
       ${styles[resultsWidthClass]}
      `}
    >
      <div ref={resultsMasterContainer} className={styles['results-container']}>
        {cards.includes('recipeView') && (
          <div className={styles['close-button-wrapper']}>
            <CloseButton
              propsOnClick={() => {
                dispatch(
                  cardsActions.setCurrentOpenFeatureCards({
                    cardAction: 'remove',
                    cardId: 'results',
                  })
                );
              }}
              propsClassName={styles['close-button']}
              black
            />
          </div>
        )}
        <RecipeHeader
          selectedLayout={selectedLayout}
          setSelectedLayout={setSelectedLayout}
          results={results}
          resultsReturned={resultsReturned}
        />
        {resultsReturned && selectedLayout === 'list' && (
          <div
            className={`${styles['results-list']} ${styles['results-list-long']}`}
            style={{
              height: listHeight,
            }}
          >
            {results.map((recipe) => {
              return <ResultsCardLong recipe={recipe} />;
            })}
          </div>
        )}
        {resultsReturned && selectedLayout === 'block' && (
          <div
            className={`${styles['results-list']} ${styles['results-list-block']}`}
            style={{
              height: listHeight,
            }}
          >
            {results.map((recipe) => {
              return <ResultsCardBlock key={recipe._id} recipe={recipe} />;
            })}
          </div>
        )}
        {!resultsReturned && (
          <div className={`${styles['no-results']}`}>
            no recipes found <FaceThink />
          </div>
        )}
      </div>
    </div>
  );
}

export { Results };
