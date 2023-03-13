import styles from "./_music.module.scss";
import { ReactComponent as AudioOnIcon } from "assets/icons/volume-light.svg";
import { ReactComponent as AudioOffIcon } from "assets/icons/volume-slash-light.svg";
import { useState } from "react";
import Mama from "assets/audio/mama.mp3";
import { audioActions } from "common/store/audio-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "store";

type MusicProps = {
  propsClassName: string;
};

function Music({ propsClassName }: MusicProps) {
  const dispatch = useDispatch();

  const audioConfig = useSelector(
    (state: RootState) => state.audio.audioConfig
  );
  // const [volumeOn, setVolumeOn] = useState(false);
  const toggleVolume = () => {
    // setVolumeOn(!volumeOn);
    dispatch(
      audioActions.setAudioConfig({ audio: Mama, play: !audioConfig.play })
    );
  };

  return (
    <>
      {audioConfig.play ? (
        <>
          <AudioOnIcon
            className={`${propsClassName} ${styles["speaker-icon"]}`}
            onClick={toggleVolume}
          />
        </>
      ) : (
        <AudioOffIcon
          className={`${propsClassName} ${styles["speaker-icon"]}`}
          onClick={toggleVolume}
        />
      )}
    </>
  );
}

export { Music };
