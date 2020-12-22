import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { MealList } from '../components/MealList';
import { useSelector } from 'react-redux';

const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favotiteMeals);

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your favorites',
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
