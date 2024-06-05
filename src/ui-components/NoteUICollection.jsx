/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Note2 } from "../models";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import NoteUI from "./NoteUI";
import { Collection } from "@aws-amplify/ui-react";
export default function NoteUICollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Note2,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      isSearchable={true}
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "NoteUICollection")}
      {...rest}
    >
      {(item, index) => (
        <NoteUI
          note2={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></NoteUI>
      )}
    </Collection>
  );
}
