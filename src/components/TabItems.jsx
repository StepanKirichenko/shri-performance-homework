import { useMemo } from "react";
import Event from "./Event";

export default function TabItems({ items }) {
  return useMemo(
    () => (
      <>
        {items.map((item, index) => (
          <Event key={index} {...item} />
        ))}
      </>
    ),
    [items]
  );
}
