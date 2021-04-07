import React from 'react'
import { css } from '@emotion/react'

const templateCss = css`
  color: red important;
  font-size: 28px;
`

export default function Header({ ...props }) {
  const templatelog = 0
  console.log(templatelog)
  
  return (
    <>
    <div css={templateCss} {...props}>
      <div>
          {'this is header'}
      </div>
    </div>
    </>
    )
  }