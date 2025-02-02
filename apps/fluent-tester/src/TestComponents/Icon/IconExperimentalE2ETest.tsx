/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from 'react';
import { View } from 'react-native';
import { Text } from '@fluentui/react-native';
import { FontIcon, SvgIcon, Icon, FontIconProps, SvgIconProps } from '@fluentui-react-native/experimental-icon';
import { ICON_ACCESSIBILITY_LABEL, ICON_TEST_COMPONENT, ICON_FONT_TEST_COMPONENT, ICON_SVG_TEST_COMPONENT } from './consts';
import TestSvg from '../../../assets/test.svg';

const fontBuiltInProps: FontIconProps = {
  fontFamily: 'Arial',
  codepoint: 0x2663,
  fontSize: 100,
  color: '#f09',
  testID: ICON_FONT_TEST_COMPONENT,
  accessibilityLabel: ICON_ACCESSIBILITY_LABEL,
};

const svgUriProps: SvgIconProps = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg',
  viewBox: '0 0 1000 1000',
  width: 100,
  height: 100,
  accessibilityLabel: ICON_ACCESSIBILITY_LABEL,
  testID: ICON_TEST_COMPONENT,
};

const svgSrcProps: SvgIconProps = {
  viewBox: '0 0 500 500',
  src: TestSvg,
  width: 72,
  height: 72,
  testID: ICON_SVG_TEST_COMPONENT,
  accessibilityLabel: ICON_ACCESSIBILITY_LABEL,
};

export const E2ETestingExperimentalIcon: React.FunctionComponent = () => {
  return (
    <View>
      <Text>Icon component</Text>
      <Icon svgSource={svgUriProps} />

      <Text>SVG</Text>
      <SvgIcon {...svgSrcProps} />

      <Text>FontIcon</Text>
      <FontIcon {...fontBuiltInProps} />
    </View>
  );
};
