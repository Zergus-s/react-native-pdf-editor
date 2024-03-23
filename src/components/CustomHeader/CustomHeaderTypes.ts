import {FC, ReactNode} from 'react';

export interface CustomHeaderProps {
  leftComponent?: FC<any>;
  rightComponent?: {
    icon: JSX.Element;
    onPress: VoidFunction;
  };
  title?: string | ReactNode;
  backgroundColor?: string;
  isLoading?: boolean;
}
