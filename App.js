/* @flow */

import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import MovieCell from './src/Movies/Components/MovieCell'
import MovieInfo from './src/Movies/Components/MovieInfo'

const movies = [
  {
    image: 'http://www.jellypedia.com/pictures/m020565_small.jpg',
    title: 'Blade Runner 2049',
    year: 2017
  },
  {
    image: 'http://www.dvdizzy.com/images/d/dunkirk-film-poster.jpg',
    title: 'Dunkirk',
    year: 2017
  },
  {
    image:
      'https://images.fandango.com/r1.0.40/ImageRenderer/131/200/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/189929/last-jedi-poster-full.jpg',
    title: 'Star Wars: The Last Jedi',
    year: 2017
  }
]

export default class App extends Component<{}> {
  _keyExtractor = (item, index) => index

  _renderItem = ({ item }) => {
    return (
      <MovieCell
        image={{ uri: item.image }}
        title={item.title}
        year={item.year}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <MovieInfo
          title="Plot"
          body="Ex obcaecati officia eaque est quibusdam numquam libero incidunt, eligendi consectetur autem at repellendus esse quam perferendis, iusto quis perferendis optio possimus dolorum cum cumque?"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#F5FCFF'
  }
})
