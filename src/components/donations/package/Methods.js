import React from 'react'
import { css } from '@emotion/react'

const methodsCss = css`
  font-size: 28px;
  margin-bottom: 25px;
  position: relative;
`

const titleCss = css`
  font-family: 'Rajdhani', sans-serif;
  color: #275D38;
  font-size: 24px;
`

const pCss = css`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  color: #292929;
  line-height: 1.42857143;
  margin-bottom: 15px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  span {
    display: block;
    color: #275D38;
    font-weight: bold;
    margin-left: 40px;
  }
`

const uListCss = css`
  padding-inline-start: 40px;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  li {
    margin: 10px 0 5px;
  }
  span {
    color: #00843D;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`

const containerCss = css`
  margin: 25px 0;
`

export default function Methods({ ...props }) {
  const templatelog = 0
  console.log(templatelog)
  
  return (
    <div css={methodsCss}>
      <div css={containerCss}>
        <h3 css={titleCss}>Give Online</h3>
        <p css={pCss}>Doing anything online is really the modern approach to a current lifestyle.
          Consider the following reasons why you would live as such:
        </p>
        <ul css={uListCss}>
          <li><span>Putting Your Expensive Phone To Full Use</span></li>
          <li><span>No Need To Lick Any Toxic Envelopes</span></li>
          <li><span>Add Another Eternally Unread Email To Your Inbox</span></li>
        </ul>
      </div>
      <hr />
      <div css={containerCss}>
        <h3 css={titleCss}>Mail a cheque</h3>
        <p css={pCss}>Your grocery store no longer accepts them, so you may as well put them to good use.
        Make payable to:<span>UVU Foundation</span>
        </p>
        <p css={pCss}>Send it to:<span>Address withheld<br />Orem, UT</span>
        </p>
      </div>
      <hr />
      <div css={containerCss}>
        <h3 css={titleCss}>Stocks {'&'} Bonds</h3>
        <p css={pCss}>You obviously know what your money is capable of, even if you do not directly
        manage it. We appreciate your desire in giving. 
        Please get in contact with some of our financial experts at Institutional Advancement:
        </p>
        <ul css={uListCss}>
          <li><span>801-BIG-CASH</span></li>
          <li><span>blessing@uvu.edu</span></li>
        </ul>
      </div>
      <hr />
    </div>
    )
  }