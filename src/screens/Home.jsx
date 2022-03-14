import React from "react";
import { View, FlatList } from "react-native";

import Card from "../components/Card";

export default function Home() {
  const data = [
    {
      id: 1,
      title: "Cookie with chocolate chip",
      category: "cookie",
      imagePath: require("../../assets/cookie.jpg"),
    },
    {
      id: 1,
      title: "Cookie with chocolate chip",
      category: "cookie",
      imagePath: {
        uri: "https://img.taste.com.au/gB2yc2gj/w643-h428-cfill-q90/taste/2016/11/caramello-cake-105070-1.jpeg",
      },
    },
    {
      id: 1,
      title: "Cookie with chocolate chip",
      category: "cookie",
      imagePath: {
        uri: "https://images.immediate.co.uk/production/volatile/sites/30/2021/03/Unicorn-cake-32e0971.jpg?quality=90&webp=true&resize=300,272",
      },
    },
    {
      id: 1,
      title: "Cookie with chocolate chip",
      category: "cookie",
      imagePath: {
        uri: "https://www.auxdelicesdupalais.net/wp-content/uploads/2020/06/pancakes-fluffy-2.jpg",
      },
    },
    {
      id: 1,
      title: "Cookie with chocolate chip",
      category: "cookie",
      imagePath: {
        uri: "https://cdn.pratico-pratiques.com/app/uploads/sites/7/2019/07/25155059/tarte-au-citron-a-l-autocuiseur.jpg",
      },
    },
    {
      id: 1,
      title: "Cookie with chocolate chip",
      category: "cookie",
      imagePath: {
        uri: "https://cuisine.nessma.tv/uploads/11/2019-10/3d49c92caa1ada17eb5ccf90bbae4fc0.jpg",
      },
    },
    {
      id: 1,
      title: "Cookie with chocolate chip",
      category: "cookie",
      imagePath: {
        uri: "https://i-reg.unimedias.fr/sites/art-de-vivre/files/styles/recipe/public/lasagnes-bolognaise_istock.jpg?auto=compress%2Cformat&crop=faces%2Cedges&cs=srgb&fit=crop&h=500&w=393",
      },
    },
    {
      id: 1,
      title: "Cookie with chocolate chip",
      category: "cookie",
      imagePath: {
        uri: "https://www.hervecuisine.com/wp-content/uploads/2021/10/whatsapp-image-2021-09-30-at-103400-730x520.jpeg.webp",
      },
    },
  ];

  const renderItem = ({ item }) => (
    <Card title={item.title} category={item.category} image={item.imagePath} />
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return (item.id + index).toString();
        }}
        numColumns={2}
      />
    </View>
  );
}
