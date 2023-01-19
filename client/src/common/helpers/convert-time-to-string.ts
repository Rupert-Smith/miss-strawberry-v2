import { convertToPlural } from "./convert-to-plural";

export const convertTimeToString = (timeArray: (number | null)[]) => {
  let convertedString;
  let hoursValue = timeArray[0];
  let minutesValue = timeArray[1];
  let hourOrHours = convertToPlural("hour", hoursValue);
  let minuteOrMinutes = convertToPlural("minute", minutesValue);

  if (!hoursValue) {
    convertedString = `${minutesValue} ${minuteOrMinutes}`;
  }
  if (!minutesValue) {
    convertedString = `${hoursValue} ${hourOrHours}`;
  }
  if (hoursValue && minutesValue) {
    convertedString = `${hoursValue} ${hourOrHours} ${minutesValue} ${minuteOrMinutes}`;
  }

  return convertedString;
};
