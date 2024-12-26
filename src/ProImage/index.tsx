import type { FC } from 'react';
import React, { useEffect } from 'react';
import { expandImageUrl, isSupportWebp } from '../_utils/tools';

import { observeInit } from '../_utils/lazy';

/** 图片组件类型 */
export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** 图片地址 */
  src: string;
  /** 兜底图 */
  defaultSrc?: string;
  /** 是否使用图片懒加载，默认使用 */
  useLazy?: boolean;
  /** 是否使用webp，默认使用 */
  useWebp?: boolean;
};

const ProImage: FC<ImageProps> = (props) => {
  const {
    useLazy = true,
    useWebp = true,
    className,
    style,
    src,
    defaultSrc,
    ...resProps
  } = props;

  useEffect(() => {
    observeInit();
  }, []);

  /** 是否使用webp */
  const isUseWebp = isSupportWebp(src) && useWebp;

  // 处理后的图片地址
  const url = isUseWebp ? expandImageUrl(src, 'xmagick=webp') : src;

  // 图片属性
  const srcProps = {
    style,
    className,
    onError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      if (defaultSrc) {
        e.currentTarget.src = defaultSrc;
      }
    },
    ...resProps,
  };

  // 使用懒加载
  if (useLazy) {
    Object.assign(srcProps, {
      'data-src': url,
    });
  } else {
    Object.assign(srcProps, {
      src: url,
    });
  }

  return <img {...srcProps} />;
};

export default ProImage;
