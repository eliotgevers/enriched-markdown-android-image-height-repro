import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { EnrichedMarkdownText } from 'react-native-enriched-markdown';

const image = 'https://raw.githubusercontent.com/eliotgevers/enriched-markdown-android-image-height-repro/main/diagram.png';
const markdownStyle = { image: { maxHeight: 320, resizeMode: 'contain', borderRadius: 8 } };

export default function App() {
  return (
    <ScrollView contentContainerStyle={{ padding: 24, paddingTop: 64, gap: 16 }}>
      <Text>Mixed inline, block and repeated images</Text>
      <EnrichedMarkdownText
        flavor="github" allowTrailingMargin={false}
        markdown={`Inline before ![Inline diagram](${image}) after.\n\n![Repeated diagram](${image})\n\nText after repeated diagram.`}
        markdownStyle={markdownStyle}
      />
      <Text>Image-only component followed by a sibling</Text>
      <View>
        <EnrichedMarkdownText flavor="github" allowTrailingMargin={false} markdown={`![Diagram](${image})`} markdownStyle={markdownStyle} />
        <Text>THIS TEXT SHOULD BE BELOW THE IMAGE</Text>
      </View>
    </ScrollView>
  );
}
