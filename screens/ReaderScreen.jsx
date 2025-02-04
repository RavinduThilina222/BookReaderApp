import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function ReaderScreen({ route }) {
  const { book } = route.params;
  const epubPath = `file:///android_asset/${book.file}`;

  const html = `
    <html>
    <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/epub.js/0.3.88/epub.min.js"></script>
    </head>
    <body style="margin: 0; padding: 0;">
      <div id="area" style="height: 100vh;"></div>
      <script>
        var book = ePub("${epubPath}");
        var rendition = book.renderTo("area", { width: "100%", height: "100%" });
        rendition.display();
      </script>
    </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={["*"]}
        source={{ html }}
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
