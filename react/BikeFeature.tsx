import React from 'react';
import { useState, useEffect, useRef, CSSProperties } from 'react';

// Styles
import styles from "./styles.css";

interface BikeFeatureProps {
  title: string,
  image: string,
  shopButtonLink: string,
  moreButton: MoreButton
}

interface MoreButton {
  buttonText: string,
  buttonLink: string,
  descriptionText: string
}

const BikeFeature: StorefrontFunctionComponent<BikeFeatureProps> = ({ title, image, shopButtonLink, moreButton }) => {
  const [openGate, setOpenGate] = useState<Boolean>(true);
  const learnMoreText = "Learn More";
  const closeButtonText = "Close";
  const classPrefix: string = "eriksbikeshop-bikefeature-1-x-";
  const [moreButtonText, setMoreButtonText] = useState<string>(learnMoreText);

  const floatContainer = useRef<any>(!null);
  const closeButton = useRef<any>(!null);
  const bikeFeatureContainer = useRef<any>(!null);
  const bikeSplit = useRef<any>(!null);
  const textSplit = useRef<any>(!null);

  useEffect(() => {
    if (openGate) {
      console.clear();
      setOpenGate(false);
    }
  })

  // VTEX adds a class prefix. This is a workaround - LM
  const newClass = (classSuffix: string) => classPrefix + classSuffix;

  const handleLearnMoreClick = () => {
    if (moreButtonText === learnMoreText) {
      openInfo();
    } else {
      closeInfo();
    }
  }

  const handleCloseButton = () => {
    closeInfo();
  }

  const handleBackgroundClick = (e: any) => {
    if (e.target.id === "floatContainer") {
      if (moreButtonText === closeButtonText) {
        closeInfo();
      }
    }
  }

  const openInfo = () => {
    bikeFeatureContainer.current.className = newClass("bikeFeatureContainerActive");
    closeButton.current.className = newClass("closeButtonActive");
    floatContainer.current.className = newClass("floatContainerActive");
    textSplit.current.className = newClass("textSplitActive");

    //@ts-expect-error
    document.body.className = newClass("noScroll");
    setMoreButtonText(closeButtonText);
  }

  const closeInfo = () => {
    bikeFeatureContainer.current.className = newClass("bikeFeatureContainer");
    closeButton.current.className = newClass("closeButton");
    floatContainer.current.className = newClass("floatContainer");
    textSplit.current.className = newClass("textSplit");

    //@ts-expect-error
    document.body.classList.remove(newClass("noScroll"));
    setMoreButtonText(learnMoreText);
  }

  return (
    <div>
      <div id="floatContainer" ref={floatContainer} onClick={handleBackgroundClick} className={styles.floatContainer}>
        <div ref={closeButton} onClick={handleCloseButton} className={styles.closeButton}>X</div>
        <div className={styles.floatWrapper}>
          <div ref={bikeFeatureContainer} className={styles.bikeFeatureContainer}>
            <div className={styles.splitter}>
              <div ref={bikeSplit} className={styles.bikeSplit}>
                <h2 className={styles.bikeTitle}>{title}</h2>
                <div className={styles.imageContainer}>
                  <img className={styles.bikeImage} src={image} />
                </div>
                <div className={styles.buttonContainer}>
                  <a href={shopButtonLink} className={styles.redButton}>Shop {title}</a>
                  <div onClick={handleLearnMoreClick} className={styles.redButton}>{moreButtonText}</div>
                </div>
              </div>
              <div ref={textSplit} className={styles.textSplit}>
                <div className={styles.descriptionWindow}>
                  <p className={styles.innerDescriptionText}>{moreButton.descriptionText}</p>
                  <a href={moreButton.buttonLink} target="_blank" rel="noreferrer" className={`${styles.redButton} ${styles.fullWidth}`}>{title} Buying Guide</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

BikeFeature.schema = {
  title: 'editor.bikefeature.title',
  description: 'editor.bikefeature.description',
  type: 'object',
  properties: {}
}

export default BikeFeature;
