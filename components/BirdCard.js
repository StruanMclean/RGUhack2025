'use client'
import { useState } from 'react';
import { Card, Group, Text, Badge, Image } from '@mantine/core';
import BirdCardDetail from './BirdCardDetail';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Flex } from '@mantine/core';

const BirdCard = ({ image, title, fact, date, callback }) => {
  const [isHidden, setIsHidden] = useState(true);  // Initially hidden

  // Toggle visibility
  const toggleOverlay = () => setIsHidden(!isHidden);

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder maw={350}>
      <Card.Section>
        <Image
          src={image}
          maw={350}
          mah={250}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Flex>
        <Button color="blue" fullWidth mt="md" radius="md">
          Detect
        </Button>

        <Button onClick={callback}>Delete</Button>
      </Flex>

      <BirdCardDetail
        title={title}
        fact={fact}
        date={date}
        image={image}
        isHidden={isHidden}  // Pass the state to control visibility
        setIsHidden={setIsHidden}
      />
    </Card>
  );
};

export default BirdCard;
