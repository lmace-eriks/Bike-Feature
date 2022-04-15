import { mathMod } from 'ramda';
import React from 'react';
import { useState, useEffect, useRef, CSSProperties } from 'react';

// Styles
import styles from "./styles.css";

interface BikeFeatureProps {
  shopAll: NavObject
  navLinks: Array<NavObject>
}

interface NavObject {
  text: string,
  link?: string
  subMenu?: Array<NavObject>
}

const BikeFeature: StorefrontFunctionComponent<BikeFeatureProps> = ({ shopAll, navLinks }) => {

  useEffect(() => {
    console.clear();
  })

  return (
    <h1>Hello World</h1>
  )
}

BikeFeature.schema = {
  title: 'editor.bikefeature.title',
  description: 'editor.bikefeature.description',
  type: 'object',
  properties: {}
}

export default BikeFeature;
