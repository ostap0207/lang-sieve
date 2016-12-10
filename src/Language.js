import React from 'react';
import { Card, CardMedia, CardTitle } from 'react-toolbox/lib/card';

const Language = props => {
  return (
    <div className="language">
      <Card raised={true} style={{width: '350px'}}>
        <CardMedia
          aspectRatio="wide"
          image={props.logo}
        />
        <CardTitle
          title={props.name}
          subtitle={props.description}
        />
      </Card>
    </div>
  );
};

export default Language;
