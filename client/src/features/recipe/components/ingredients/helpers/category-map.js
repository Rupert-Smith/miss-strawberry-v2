import { ReactComponent as FruitVegIcon } from "assets/icons/carrot-light.svg";
import { ReactComponent as CarbohydratesIcon } from "assets/icons/bread-slice-light.svg";
import { ReactComponent as TinnedFoodIcon } from "assets/icons/can-food-light.svg";
import { ReactComponent as SweetsChocolateIcon } from "assets/icons/candy-cane-light.svg";
import { ReactComponent as DairyIcon } from "assets/icons/cow-light.svg";
import { ReactComponent as OtherIcon } from "assets/icons/ellipsis-light.svg";
import { ReactComponent as FrozenIcon } from "assets/icons/icicles-light.svg";
import { ReactComponent as SaucesOilIcon } from "assets/icons/jug-light.svg";
import { ReactComponent as NutsDriedIcon } from "assets/icons/peanut-light.svg";
import { ReactComponent as HerbsSpicesIcon } from "assets/icons/pepper-hot-light.svg";
import { ReactComponent as MeatFishIcon } from "assets/icons/turkey-light.svg";

export function categoryMap(category) {
  switch (category) {
    case "fruitVeg": {
      return (
        <>
          <FruitVegIcon />
          fruits/vegetables
        </>
      );
    }
    case "dairy": {
      return (
        <>
          <DairyIcon />
          dairy
        </>
      );
    }
    case "frozen": {
      return (
        <>
          <FrozenIcon />
          frozen
        </>
      );
    }
    case "nutsDried": {
      return (
        <>
          <NutsDriedIcon />
          nuts/dried
        </>
      );
    }
    case "saucesOil": {
      return (
        <>
          <SaucesOilIcon />
          sauces/oil
        </>
      );
    }
    case "sweetsChocolate": {
      return (
        <>
          <SweetsChocolateIcon />
          sweets/chocolate
        </>
      );
    }
    case "meatFish": {
      return (
        <>
          <MeatFishIcon />
          meat/fish
        </>
      );
    }
    case "tinnedGoods": {
      return (
        <>
          <TinnedFoodIcon />
          tinned goods
        </>
      );
    }
    case "herbsSpices": {
      return (
        <>
          <HerbsSpicesIcon />
          herbs/spices
        </>
      );
    }
    case "carbohydrates": {
      return (
        <>
          <CarbohydratesIcon />
          carbohydrates
        </>
      );
    }
    case "other": {
      return (
        <>
          <OtherIcon />
          other
        </>
      );
    }

    default:
      return <>error</>;
  }
}
