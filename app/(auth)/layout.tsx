import React, { Children } from 'react'

interface childrenProps {
  children: React.ReactNode;
}

function layout(props: childrenProps) {
  return (
    <div>layout
    {props.children}
    </div>
  )
}

export default layout