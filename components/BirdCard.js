'use client'
import { useState } from 'react';
import { Card, Group, Text, Badge, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Flex } from '@mantine/core';

const BirdCard = ({ image, title, fact, date, long, lat, callback, open }) => {

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
        <div>
         <Text fw={500}>{title}</Text>
         <Text fw={500} size='md'>Location: {long}, {lat}</Text>
        </div>
        <Badge color="pink">Data Bellow</Badge>
      </Group>

      <Flex>
        <Button onClick={() => open()} color="blue" fullWidth mt="md" m={5} radius="md">
          Detect
        </Button>

        <Button color="red" fullWidth mt="md" m={5} radius="md" onClick={callback}>Delete</Button>
      </Flex>
    </Card>
  );
};

export default BirdCard;
