import React from 'react';
import { Linking, SafeAreaView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { scale } from 'react-native-size-matters/extend';
import { GoBackButton } from '@src/components/GoBackButton/GoBackButton';
import { MenuButton } from '@src/components/MenuButton/MenuButton';
import {
  Container,
  SafeWrap,
  GoBackContainer,
  InfoWrap,
  InfoText,
  TextHighlight,
  LinkedButtonContainer,
  NameText,
  DateText,
  TMDBBlock,
  TMDBLogo,
  TMDBText,
} from './layouts';
import { TAboutScreenProps } from './types';

export const AboutScreen = ({ navigation }: TAboutScreenProps) => (
  <Container>
    <SafeAreaView>
      <SafeWrap>
        <GoBackContainer>
          <GoBackButton onPress={() => navigation.pop()} />
        </GoBackContainer>
        <InfoWrap>
          <InfoText>
            <TextHighlight>MovieQuiz</TextHighlight> is an app designed to showcase the results of work with the entire
            pipeline of react-native app developement.
          </InfoText>
          <InfoText>Infromation about technologies used is available on github.</InfoText>
          <MenuButton onPress={() => Linking.openURL('https://github.com/trtq/movie-quiz')}>
            Source code <FontAwesome5 name="github" size={scale(20)} />
          </MenuButton>
          <LinkedButtonContainer>
            <MenuButton onPress={() => Linking.openURL('https://www.linkedin.com/in/evgeny-ivanitsky')}>
              My LinkedIn <FontAwesome name="linkedin-square" size={scale(20)} />
            </MenuButton>
          </LinkedButtonContainer>
          <NameText>© Evgeniy "trtq" Ivanitsky</NameText>
          <DateText>September 2022</DateText>
        </InfoWrap>
        <TMDBBlock>
          <TMDBLogo />
          <TMDBText>This product uses the TMDb API but is not endorsed or certified by TMDb</TMDBText>
        </TMDBBlock>
      </SafeWrap>
    </SafeAreaView>
  </Container>
);
