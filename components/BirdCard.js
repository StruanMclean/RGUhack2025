'use client'
import { useState } from 'react';
import { Card, Group, Text, Badge, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Flex } from '@mantine/core';

const BirdCard = ({ image, title, fact, date, callback }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder maw={350}>
      <Card.Section>
        <Image
          src={image}
          maw={350}
          miw={350}
          mih={250}
          mah={250}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <Badge color="pink">Data Bellow</Badge>
      </Group>

      <Flex>
        <Button color="blue" fullWidth mt="md" m={5} radius="md">
          Detect
        </Button>

        <Button color="red" fullWidth mt="md" m={5} radius="md" onClick={callback}>Delete</Button>
      </Flex>
    </Card>
  );
};

export default BirdCard;
