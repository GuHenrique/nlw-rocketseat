import React from 'react';

import {
  View,
  Text
} from 'react-native';
import { UserFoto } from '../UserFoto';
import {MotiView} from 'moti'
import { styles } from './styles';

export type MessageProps = {
  id: string,
  text: string,
  user: {
    name: string,
    avatar_url: string
  }
}

type Props = {
  data: MessageProps
}

export function Message({data} : Props){
  return (
    <MotiView 
      from={{
        opacity: 0,
        translateY:-50
      }}
      animate={{
        opacity: 1,
        translateY:0
      }}
      transition={{type: 'timing', duration: 900}}
      style={styles.container}>
      <Text style={styles.message}>
        {data.text}
      </Text>

      <View style={styles.footer}>
        <UserFoto 
        imageURI={data.user.avatar_url}
        sizes='SMALL'
        />

        <Text style={styles.userName}>
          {data.user.name}
        </Text>
      </View>
    </MotiView>
  );
}