import React from 'react';
import { View, Linking, TouchableOpacity } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import moment from 'moment';

export default class Article extends React.Component {
    render() {

        // destructuring variable "article" passed from App.js
        const {
            title, description, publishedAt, source, urlToImage, url
        } = this.props.article;

        const { noteStyle, featuredTitleStyle } = styles;
        const time = moment(publishedAt || moment.now()).fromNow();
        const defaultImg = "https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg";

        return (
            <TouchableOpacity

                // tell the element to use the foreground when displaying the ripple effect on the card
                useForeground
                onPress = {() => Linking.openURL(url)}
            >

                <Card
                    featuredTitle={title}
                    featuredTitleStyle={featuredTitleStyle}
                    image={{

                        // if urlToImage is null, use defaultImg
                        url: urlToImage || defaultImg
                    }}
                >

                    <Text style={{ marginBottom: 10 }}>
                        {description || 'Read More...'}
                    </Text>

                    <Divider style={{ backgroundColor: '#dfe6e9'}} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={noteStyle}>{source.name.toUpperCase()}</Text>
                        <Text style={noteStyle}>{time}</Text>
                    </View>
                </Card>
            </TouchableOpacity>
        );
    }
}

const styles = {
    noteStyle: {
        margin: 5,
        fontStyle: 'italic',
        color: '#b2bec3',
        fontSize: 10
    }, 
    featuredTitleStyle: {
        marginHorizontal: 5,
        textShadowColor: '#00000f',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 3
    }
};