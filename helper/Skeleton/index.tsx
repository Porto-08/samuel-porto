import React, { useState } from 'react'
import styles from "./styles.module.scss";

interface ISkeletonProps {
  src: string;
  height?: number;
  width?: number;
  alt: string;
  title: string;
  objectFit?: string;
  priority?: boolean;
  draggable?: boolean;
}

const Skeleton = ({ alt, ...props }: ISkeletonProps) => {

  const [skeleton, setSkeleton] = useState<boolean>(true);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;

    target.style.opacity = '1';
    setSkeleton(false);
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}

      <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
    </div>
  )
}

export default Skeleton;