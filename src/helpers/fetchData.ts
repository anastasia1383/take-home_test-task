import { Quest } from "../types/types";

export const fetchData = async (): Promise<Quest[]> => {
  const response = await fetch('../../public/quests.json');

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  const quests: Quest[] = data.quests;

  return quests;
};
