import React from 'react';
import { WebView } from 'react-native-webview'
const VideoDetails = (props) => {
    const tubeId = props.route.params.id;
    const tubeUrl = `https://www.youtube.com/embed/${tubeId}`
    return (
         <WebView
         style={{marginTop:20}}
         javaScriptEnable = {true}
         source = {{uri:tubeUrl}}
         />
    )

}
export default VideoDetails;

