import * as React from 'react';
import { Picker } from '@react-native-picker/picker';

/*
 * The MenuPicker was created because the RN Core Picker was deprecated (preventing us from updating to RN 0.66).
 * MenuPicker uses the community Picker package for iOS/Win32 and our own Picker for Win32/MacOS.
 */

export interface CollectionItem<T = string> {
  label: string;
  value?: T;
  testID?: string;
}

export interface MenuPickerProps {
  prompt?: string;
  selected?: string;
  onChange?: (value: any, index?: number) => void;
  collection?: CollectionItem[];
  style?: any;
  testID?: string;
}

export const MenuPicker: React.FunctionComponent<MenuPickerProps> = (props: MenuPickerProps) => {
  const { prompt, selected, onChange, collection, style, testID } = props;
  let selectedItemKey;

  collection.forEach((item) => {
    if (item.value == selected) {
      selectedItemKey = item.value;
    }
  });

  return (
    <Picker
      testID={testID}
      prompt={prompt}
      selectedValue={selectedItemKey}
      onValueChange={(value: string, index: number) => onChange(value, index)}
      style={{ ...style }}
    >
      {collection.map((item, index) => (
        <Picker.Item label={item.label} key={index} value={item.value} testID={item.testID} />
      ))}
    </Picker>
  );
};
