import React from 'react';
import { Component } from 'react';
import { View, Text, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
export default class Videos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listLoaded: false,
        };
    }

    componentDidMount() {
        this.callApi();
    }
    callApi = () => {
        fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyB3tTnL-sKv-VkBmL-w9NvAWKjr0K41m5w')
            .then((res => res.json()))
            .then((response) => {
                this.setState({
                    listLoaded: true,
                    VideoList: Array.from(response.items)
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
         
        return (
            <View>
                {this.state.listLoaded && (
                    <View style={{ paddingTop: 0 }}>
                        <FlatList
                            data={this.state.VideoList}
                            renderItem={({ item }) =>
                                <TubeItem
                                    id={item.id.videoId}
                                    title={item.snippet.title}
                                    imageSrc={item.snippet.thumbnails.high.url}
                                     {...this.props}
                                />
                            } />
                    </View>
                )}

                {!this.state.listLoaded && (
                    <View style={{ paddingTop: 30 }}>
                        <Text>Loading...</Text>
                    </View>
                )}
            </View>
        )
    }
}

class TubeItem extends Component {

     
    render() {
        return (
            <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('VideoDetails', {
                id:this.props.id,
                 
            })}>
                <View style={{ paddingTop: 2 }}>
                    <Image
                        style={{ width: '100%', height: 200 }}
                        source={{ uri: this.props.imageSrc }}
                    />
                    <Text>{this.props.title}</Text>

                </View>
            </TouchableWithoutFeedback>
        )
    }
} 