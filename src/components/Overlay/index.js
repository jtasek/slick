// @flow
import React from 'react'
import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import styles from './styles.css'

const Overlay = ({ visible, children }) => (
    <div className={styles.overlay}>
        {children}
        {/* <svg style={visible ? { display: 'block' } : { display: 'none' }}>
       <filter id="filter">
         <feGaussianBlur colorInterpolationFilters="sRGB" id="blur_1" stdDeviation="10" result="BLUR" in="LIGHTENED" />
         <feImage id="feimage" xlinkHref='data:image/svg+xml;charset=utf-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="100%" height="100%"><rect width="100%" height="100%" fill="black"/></svg>' x="0" y="0" width="100%" height="100%" result="mask" preserveAspectRatio="none" />
         <feComposite in2="mask" in="BLUR" operator="in" result="comp" />
         <feMerge result="merge">
           <feMergeNode in="SourceGraphic" />
           <feMergeNode in="comp" />
         </feMerge>
       </filter>
     </svg> */}
    </div>
)

export default Overlay
