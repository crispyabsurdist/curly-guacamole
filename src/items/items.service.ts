/**
 * Data Model Interfaces
 */

import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";

/**
 * In-Memory Store
 */

let items: Items = {
  1: {
    id: 1,
    name: "Fäbojänsk Falukorv",
    price: 599,
    description: "Falukorv marinerad i svensk hederlig bakteriekultur",
    image: "https://bit.ly/3JqK2cb",
  },
  2: {
    id: 2,
    name: " Palmes Paté",
    price: 299,
    description: "Mosig och spontan",
    image: "https://bit.ly/3LmVLKK",
  },
  3: {
    id: 3,
    name: "Bakluckevarm öl",
    price: 199,
    description: "Besk och alltid en besvikelse",
    image: "https://bit.ly/3LuwEpp",
  },
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<Item[]> => Object.values(items);
export const find = async (id: number): Promise<Item> => items[id];

export const create = async (newItem: BaseItem): Promise<Item> => {
  const id = new Date().valueOf();

  items[id] = {
    id,
    ...newItem,
  };

  return items[id];
};

export const update = async (
  id: number,
  itemUpdate: BaseItem
): Promise<Item | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  items[id] = { id, ...itemUpdate };

  return items[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete items[id];
};
