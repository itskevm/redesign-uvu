import React from 'react'
import { css } from '@emotion/react'
import Donation from './Donation'
import Methods from './Methods'

const donationsCss = css`
  color: black;
  font-size: 28px;
  padding: 0px 15px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

const titleCss = css`
  font-family: 'Rajdhani', sans-serif;
  color: #275D38;
  padding: 50px 0;
`

const listCss = css`
  display: grid;
`

const giveCss = css`
  float: right;
  display: inline;
  background-color: #275D38;
  color: white;
  border: 2px solid #275D38;
  border-radius: 10px;
  padding: 15px 20px;
  text-transform: uppercase;
  font-family: 'Rajdhani', sans-serif;
  font-size: 16px;
    
  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #000;
    text-decoration: underline;
  }
`

const categoryCss = css`
  float: left;
  width: 50%;
  padding: 10px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

const categoriesCss = css`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`

export default function Donations({ ...props }) {
  const templatelog = 0
  console.log(templatelog)
  
  return (
    <div css={donationsCss} {...props}>
      <div css={categoriesCss}>
        <div css={categoryCss}>
          <h2 css={titleCss}>Financial Donations</h2>
          <div css={listCss}>
            <Donation 
              title={'University Giving Priorities'}
              src={"https://www.uvu.edu/advancement/images/ways-to-give/giving_priorities.jpg"}
            />
            <Donation 
              title={'Scholarships'}
              src={"https://www.uvu.edu/advancement/images/ways-to-give/giving_scholarships.jpg"}
            />
            <Donation 
              title={'Annual Giving'}
              src={"https://www.uvu.edu/advancement/images/ways-to-give/giving_annualgiving.jpg"}
            />
          </div>
        </div>
        <div css={categoryCss}>
          <h2 css={titleCss}>More Ways to Give</h2>
          <div css={listCss}>
            <Donation 
              title={'Event Sponsorship'}
              src={'https://www.uvu.edu/advancement/images/ways-to-give/giving_eventsponsorship.jpg'}
            />
            <Donation 
              title={'Matching Gifts'}
              src={'https://www.uvu.edu/advancement/images/ways-to-give/giving_matchinggifts.jpg'}
            />
            <Donation 
              title={'In-Kind Donation'}
              src={'https://www.uvu.edu/advancement/images/ways-to-give/in-kind.jpg'}
            />
          </div>
        </div>
      </div>
      <h2 css={titleCss} style={{display: 'inline'}}>How to Proceed</h2>
      <button css={giveCss}>Give Now</button>
      <Methods />
    </div>
    )
  }