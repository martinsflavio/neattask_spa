import * as React from 'react';

export interface IProps {
  name: string;
  age?: number;
}

const Avatar = (props:IProps) => {
  return(
    <div>
      <div>{props.name}</div>
      <div>{props.age}</div>
    </div>
  );
};

export default Avatar;
