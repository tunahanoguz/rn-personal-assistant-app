import React from 'react';
import { Image } from 'react-native';
import { Avatar, Block, Text, EventCard } from '../../components';
import { colors } from '../../styles';

function Event() {
  const events = [
    {
      id: 1,
      title: 'Design Review',
      author: 'Josè',
      description: 'Illustrations - Update gradien...',
      color: 'darkPurple',
      isFinished: true,
    },
    {
      id: 2,
      title: 'Insights Analysis',
      author: 'Ihmad',
      description: 'How many users keep using the “add now” feature on cal...',
      color: 'red',
      isFinished: false,
    },
    {
      id: 3,
      title: 'Retrospective',
      author: 'Elizabeth',
      description: 'How we handle crisis this ti...',
      color: 'darkGreen',
      isFinished: false,
    },
    {
      id: 4,
      title: 'User Research',
      author: 'Shawn',
      description: 'Recruit at least 25 testers',
      color: 'yellow',
      isFinished: false,
    },
  ];
  return (
    <Block flex={1} color={colors.darkPurple}>
      <Block
        flex={1}
        margin={[22, 0, 0, 0]}
        color={colors.mediumPurple}
        radius={36}>
        <Block
          flex={1}
          margin={[30, 0, 0, 0]}
          padding={[0, 24, 24, 24]}
          color="white"
          radius={[36, 36, 0, 0]}>
          <Block
            width={45}
            height={6}
            margin={[10, 0, 14, 0]}
            color={colors.lightGrey}
            radius={100}
            align="center"
          />

          <Block
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            margin={[0, 0, 30, 0]}>
            <Block
              justifyContent="center"
              alignItems="center"
              width={24}
              height={24}
              margin={[0, 16, 0, 0]}
              color={colors.darkPurple}
              radius={100}>
              <Text mediumWeight color="white">
                3
              </Text>
            </Block>
            <Image source={require('../../assets/icons/more-icon.png')} />
          </Block>

          <Block margin={[0, 0, 24, 0]}>
            <Text boldWeight lowerLarge style={{ marginBottom: 8 }}>
              Weekly Design Crit
            </Text>

            <Text color={colors.darkGrey}>Sep 9, 2019</Text>
          </Block>

          <Block margin={[0, 0, 36, 0]}>
            <Text
              boldWeight
              lowerLarge
              color={colors.darkPurple}
              style={{ marginBottom: 24 }}>
              Partecipants (4)
            </Text>

            <Block flexDirection="row">
              <Avatar
                source={require('../../assets/images/avatar1.png')}
                style={{ marginRight: 12 }}
              />
              <Avatar
                source={require('../../assets/images/avatar2.png')}
                style={{ marginRight: 12 }}
              />
              <Avatar
                source={require('../../assets/images/avatar3.png')}
                style={{ marginRight: 12 }}
              />
              <Avatar
                source={require('../../assets/images/avatar4.png')}
                style={{ marginRight: 12 }}
              />
            </Block>
          </Block>

          <Block>
            {events.map((event) => {
              const {
                id,
                title,
                author,
                description,
                color,
                isFinished,
              } = event;

              return (
                <EventCard
                  key={id}
                  title={title}
                  author={author}
                  description={description}
                  color={color}
                  isFinished={isFinished}
                />
              );
            })}
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

export default Event;
