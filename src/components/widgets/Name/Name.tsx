import React, { useState, useEffect, useContext } from 'react'

import { UserInfos } from '../../../context'

const Name = (props: NameProps) => {
  const userInfos = useContext(UserInfos)

  const isLongText = userInfos.name.length >= 10

  return (
    <div className={`Name ${props.size} ${isLongText ? "long" : "short"}`}>
      {userInfos.name}
    </div>
  )
}

interface NameProps {
  size: "small" | "medium" | "large"
}

export default Name
