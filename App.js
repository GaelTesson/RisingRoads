import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button} from '@ui-kitten/components';
import {sweety } from './src/Theme/custom-theme (1)'


const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>Rising Roads</Text>
    <Text category='p1'>C'est ici que tout commence</Text>
  </Layout>
);

export default () => (
  <ApplicationProvider {...eva} theme={[eva.dark, sweety]}>
    <HomeScreen />
  </ApplicationProvider>
);