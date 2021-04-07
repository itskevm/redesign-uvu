import React from 'react'
import { css } from '@emotion/react'

const bannerCss = css`
  color: white;
  font-size: 28px;
  background-image: url(https://www.uvu.edu/_common/images/headers/campus-detail-03.jpg);
  background-size: cover;
  padding: 90px 30px;

  button {
    margin-top: 20px;
    text-align: center;
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
  }
  
  @media screen and (min-width: 768px) {
    font-size: 21px;
    padding: 170px 80px;
  }
`

const titleCss = css`
  font-family: 'Rajdhani', sans-serif;
  font-size: 35px;
  margin-bottom: 15px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    font-size: 58px;
  }
`

const pCss = css`
  font-family: 'Lato', sans-serif;
  font-size: 21px;
  line-height: 1.42857143;
  margin-bottom: 15px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

export default function Banner({ ...props }) {
  const templatelog = 0
  console.log(templatelog)
  
  return (
    <div css={bannerCss} {...props}>
      <h1 css={titleCss}>Ways to Give</h1>
      <p css={pCss}>There are many ways you can support UVU. 
        Your financial donations open doors by supporting scholarships, 
        the faculty, academic programs, and athletics. Sponsorship of the President's 
        Scholarship Ball helps provide 115 students annually with merit scholarships.</p>
      <p css={pCss}>Eighty-seven percent of UVU graduates remain in the state. 
        An investment in UVU is not just an investment in our 
        students—it's an investment in Utah's future.<br />
        <button>Give Now</button>
        </p>
    </div>
    )
  }