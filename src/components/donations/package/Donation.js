import React from 'react'
import { css } from '@emotion/react'

const donationCss = css`
  font-size: 28px;
  margin-bottom: 250px;
  position: relative;
  &:hover {
    img {
      opacity: 0.3;
    }
    h2 {
      font-size: 46px;
    }
  }
`

const titleCss = css`
  font-family: 'Rajdhani', sans-serif;
  color: white;
  z-index: 2;
  text-align: center;
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  -webkit-transition: all .2s ease;
  -moz-transition: all .2s ease;
  transition: all .2s ease;
`

const imgCss = css`
  z-index: -1;
  opacity: 0.5;
  display: block;
  width: 100%;
  object-fit: cover;
  max-height: 200px;
  -webkit-transition: all .2s ease;
  -moz-transition: all .2s ease;
  transition: all .2s ease;
`

const aCss = css`
  background-color: black;
  position: absolute;
  max-width: 767px;
  margin-left: auto;
  margin-right: auto;
`

export default function Donation({ ...props }) {
  const templatelog = 0
  console.log(templatelog)
  
  return (
    <div css={donationCss}>
      <a href="" css={aCss}>
        <img src={props.src} css={imgCss}/>
        <h2 css={titleCss}>{props.title}</h2>
      </a>
    </div>
    )
  }