import clsx from 'clsx';
import React from 'react'
interface Props{
    children: React.ReactNode;
    className?: string;
    id?: string,
    style?: React.CSSProperties;
}


const Container = ({children, className, id, style}: Props) => {
  return (
    <div>
      <div className={clsx(className, "w-full max-w-8xl mx-auto px-5")}
        style={style}  id={id}  >
        {children}
      </div>
    </div>
  )
}



export default Container
