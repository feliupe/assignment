import { FC, useCallback } from "react";
import Checkbox from "../Checkbox";

const GithubRepoList: FC<{
  items: { name: string; checked?: boolean }[];
  onChange: (items: any[]) => void;
}> = ({ items, onChange }) => {
  const onCheckboxChange = useCallback(
    (name: string, checked: boolean) => {
      const changedItemIndex = items.findIndex((item) => item.name === name);
      const updatedItem = { ...items[changedItemIndex], checked };
      const itemsCopy = [...items];
      itemsCopy[changedItemIndex] = updatedItem;
      onChange(itemsCopy);
    },
    [items, onChange]
  );

  return (
    <>
      {items.map((item) => (
        <div key={item.name}>
          {item.name}{" "}
          <Checkbox
            checked={item.checked}
            onChange={(value) => onCheckboxChange(item.name, value)}
          />
        </div>
      ))}
    </>
  );
};

export default GithubRepoList;
