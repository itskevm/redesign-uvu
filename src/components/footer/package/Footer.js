import React from 'react'
import { css } from '@emotion/react'

const footerCss = css`
  color: red important;
  font-size: 28px;
`

const deptCss = css`
  background: linear-gradient(to bottom, #eaebec 0%, #ffffff 61%, #fbfbfb 100%);
  color: #616263;
  font-size: 14px;
  font-family: 'Lato', sans-serif;
  padding: 20px;
  text-align: center;
  margin: auto;
`

const topCss = css`
  background-color: #275d38;
  padding: 20px 5px 40px;
  font-size: 14px;
  text-align: center;
`

const botCss = css`
  background-color: #275037;
  font-size: 11px;
  padding: 20px;
  text-align: center;
`

export default function Footer({ ...props }) {
  const templatelog = 0
  console.log(templatelog)
  
  return (
    <>
    <div css={footerCss} {...props}>
      <div css={deptCss}>
        {'UVU Foundation | blessing@uvu.edu | (801) 863-8568 | 800 West University Parkway MS111 • Orem, UT 84058'}
      </div>
      <div css={topCss}>
        {'Footer Items That Help Navigate'}
      </div>
      <div css={botCss}>
        {'Connect With Us On Social Media'}
      </div>
    </div>
    </>
    )
  }