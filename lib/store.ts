import { type StoreApi } from "zustand";
import { type UseBoundStoreWithEqualityFn } from "zustand/traditional";

export const pick = <T extends object, K extends keyof T>(
  obj: T,
  ...propNames: K[]
): { [P in K]: T[P] } => {
  const result = {} as Partial<{ [P in K]: T[P] }>;

  for (const propName of propNames) {
    if (propName in obj) {
      result[propName] = obj[propName];
    }
  }

  return result as { [P in K]: T[P] };
};

export const createStoreHook =
  <T extends object, K extends keyof T>(
    store: UseBoundStoreWithEqualityFn<StoreApi<T>>,
  ) =>
  (...keys: K[]) =>
    store((state) => pick(state, ...keys));
